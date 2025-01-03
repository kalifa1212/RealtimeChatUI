export interface Utilisateur {
  id?: number,
  nom?: string|null,
  identifiant?: string|null,
  prenom?: string|null,
  email?: string|null,
  motDePasse?: string|null,
  status?: string|null,
  dateDeNaissance?: Date|null,
  lastSeen?:Date|null,
  typecompte?: string|null,
  imageUrl?: string|null,
  locked?: boolean|null,
  using2FA?: boolean|null
}
