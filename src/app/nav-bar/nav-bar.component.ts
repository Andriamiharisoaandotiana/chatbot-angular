import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'], // Correction ici
})
export class NavBarComponent {
  menuActive = false;
  isDropdownOpen = false;
  isMobileMenuOpen = false;

  toggleDropdown(event: Event) {
    event.stopPropagation(); // Empêche la propagation pour éviter la fermeture immédiate
    this.isDropdownOpen = !this.isDropdownOpen;
    console.log('Dropdown toggled:', this.isDropdownOpen);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    console.log('Mobile menu toggled:', this.isMobileMenuOpen);
  }

  @HostListener('document:click', ['$event'])
  closeDropdown(event: Event) {
    const targetElement = event.target as HTMLElement;

    // Ferme le dropdown si on clique en dehors
    if (!targetElement.closest('.dropdown-container')) {
      this.isDropdownOpen = false;
      console.log('Dropdown closed');
    }

    // Ferme le menu mobile aussi si ouvert
    if (!targetElement.closest('.mobile-menu') && this.isMobileMenuOpen) {
      this.isMobileMenuOpen = false;
      console.log('Mobile menu closed');
    }
  }
}
