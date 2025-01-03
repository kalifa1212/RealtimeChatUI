export interface MessagePayload {
    id?: number,
    chatId?: string,
    contenu?: string,
    dateHeure?: string|null,
    expediteurId?: number,
    userDestinataireId?: number,
  }
