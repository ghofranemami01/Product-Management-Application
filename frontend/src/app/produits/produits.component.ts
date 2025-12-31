import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Produit } from '../model/Produit';
import { Categorie } from '../model/Categorie';
import { ProduitsService } from '../services/produits.service';
import { CategoriesService } from '../services/categorie.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'],
})
export class ProduitsComponent implements OnInit {
  produits: Produit[] = [];
  filteredProduits: Produit[] = [];
  categories: Categorie[] = [];

  produitCourant: Produit = new Produit();
  selectedCategory: Categorie | undefined;
  editMode: boolean = false;
  erreur: string | undefined;

  // Filtres
  searchTerm: string = '';
  filtreCategorieId: number | string = '';
  filtrePromotion: boolean = false;

  // Scroll vers l'édition
  @ViewChild('editSection') editSection!: ElementRef;

  constructor(
    private produitsService: ProduitsService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.getProduits();
    this.getCategories();
  }

  // === PRODUITS ===
  getProduits(): void {
    this.produitsService.getProduits().subscribe({
      next: (produits) => {
        this.produits = produits;
        this.filteredProduits = [...produits];
      },
      error: (err) => {
        console.error(err);
        this.erreur = 'Erreur lors du chargement des produits';
      },
    });
  }

  getCategories(): void {
    this.categoriesService.getCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  validerFormulaire(form: NgForm): void {
    if (this.editMode) {
      const confirmUpdate = confirm(
        `Confirmez-vous la mise à jour du produit : ${this.produitCourant.designation || 'Sans nom'} ?`
      );
      if (confirmUpdate) {
        this.produitCourant.categorie = this.selectedCategory;

        this.produitsService.updateProduit(this.produitCourant).subscribe({
          next: (updatedProduit) => {
            const index = this.produits.findIndex(p => p.id === updatedProduit.id);
            if (index !== -1) {
              this.produits[index] = updatedProduit;
              this.appliquerFiltres();
            }
            alert('Produit modifié avec succès !');
            this.annulerEdition();
          },
          error: (err) => {
            console.error(err);
            this.erreur = 'Erreur lors de la mise à jour';
          },
        });
      }
    }
  }

  editerProduit(p: Produit) {
    this.produitCourant = { ...p };
    this.selectedCategory = p.categorie;
    this.editMode = true;

    // Scroll vers le formulaire
    setTimeout(() => {
      if (this.editSection) {
        this.editSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  }

  annulerEdition(): void {
    this.editMode = false;
    this.produitCourant = new Produit();
    this.selectedCategory = undefined;
    this.erreur = undefined;
  }

  supprimerProduit(p: Produit): void {
    if (confirm(`Voulez-vous supprimer le produit : ${p.designation || 'Sans nom'} ?`)) {
      if (p.id) {
        this.produitsService.deleteProduitById(p.id).subscribe({
          next: () => {
            this.produits = this.produits.filter(pr => pr.id !== p.id);
            this.appliquerFiltres();
            alert('Produit supprimé avec succès !');
          },
          error: (err) => {
            console.error(err);
            alert('Erreur lors de la suppression');
          },
        });
      }
    }
  }

  // === FILTRES ===
  onSearchTermChange(): void {
    this.appliquerFiltres();
  }

  filtrerParCategorie(): void {
    this.appliquerFiltres();
  }

  filtrerPromotion(): void {
    this.appliquerFiltres();
  }

  reinitialiserFiltres(): void {
    this.searchTerm = '';
    this.filtreCategorieId = '';
    this.filtrePromotion = false;
    this.filteredProduits = [...this.produits];
  }

  private appliquerFiltres(): void {
    this.filteredProduits = this.produits.filter(produit => {
      let valide = true;

      // Filtre par désignation
      if (this.searchTerm.trim()) {
        valide = valide && (produit.designation?.toLowerCase().includes(this.searchTerm.toLowerCase()) ?? false);
      }

      // Filtre par catégorie
      if (this.filtreCategorieId) {
        valide = valide && (produit.categorie?.id == this.filtreCategorieId);
      }

      // Filtre par promotion
      if (this.filtrePromotion) {
        valide = valide && (produit.enPromotion === true);
      }

      return valide;
    });
  }
}
