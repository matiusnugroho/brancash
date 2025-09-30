// cypress/e2e/dashboard.cy.ts
/// <reference types="cypress" />

describe('Dashboard Penjualan', () => {
  it('Halaman dashboard dapat dibuka', () => {
    cy.visit('http://localhost:5173')
    cy.contains('ANKA Store').should('be.visible')
  })

  it('Sidebar desktop tampil', () => {
    cy.visit('http://localhost:5173')
    cy.get('#sidebar').should('be.visible')
  })

  it('Sidebar mobile bisa dibuka dan ditutup', () => {
    cy.viewport('iphone-6')
    cy.visit('http://localhost:5173')

    cy.get('button[title="Menu"]').click()
    cy.contains('Dashboard').should('be.visible')

    cy.get('button[title="Close"]').click()
    cy.contains('Dashboard').should('not.exist')
  })

  it('KPI cards tampil', () => {
    cy.visit('http://localhost:5173')
    cy.contains('Revenue').should('be.visible')
    cy.contains('Visitors').should('be.visible')
    cy.contains('Orders').should('be.visible')
    cy.contains('Avg. Purchase Value').should('be.visible')
  })

  it('Stok Item Kritis tampil', () => {
    cy.visit('http://localhost:5173')
    cy.contains('Stok Item Kritis').should('be.visible')
  })
})
