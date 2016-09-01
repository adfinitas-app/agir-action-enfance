---
title: customer-2
event_woopra: Formulaire de test
panneau_introduction:
  fond_image_path:
  fond_color:
  texte_html:
panneau_question:
  fond_image_path:
  fond_color:
  texte_html:
  champs:
    - type: champ_libre_court
      nom_machine: phone
      reponses:
        - valeur:
      options:
        propriete_visiteur: true
        label: Veuillez entrer votre numéro de téléphone (Obligatoire)
        placeholder: 'Téléphone *'
        requis: true
        message_erreur: Numéro de téléphone invalide
        controle: telephone
        fond_image_path: 'http://www.unesourisetmoi.info/data/medias/photos/134/changer-fond-ecran-windows_01.jpg'
        fond_color:
panneau_informations_personnelles:
  fond_image_path:
  fond_color:
  texte_html:
  champs:
    - type: champ_libre_court
      nom_machine: phone2
      reponses:
        - valeur:
      options:
        propriete_visiteur: true
        label: Veuillez entrer votre numéro de téléphone (Obligatoire)
        placeholder: 'Téléphone *'
        requis: true
        message_erreur: Numéro de téléphone invalide
        controle: telephone
        fond_image_path: 'http://www.unesourisetmoi.info/data/medias/photos/134/changer-fond-ecran-windows_01.jpg'
        fond_color:
options:
  champs_caches:
    - nom: hidden
      valeur: test-ok
      propriete_visiteur: true
bouton_de_soumission: Signer la pétiton
page_de_remerciement_path: /index.html
_comments:
  nom: Obligatoire et unique. Description courte du champ
  texte: Ce champ peut etre vide
  placeholder: 'Seulement pour les champs de type "champ libre"'
  controle: 'Seulement pour les champs de type "champ libre"'
  reponses: 'Seulement pour les champs de type "choix"'
  page_de_remerciement_path: "URL de la page lorsque l'utilisateur valide le formulaire"
  propriete_visiteur: Cocher cette case si vous souhaitez que ce champs remonte dans les propriété du visiteur sur Woopra
  event_woopra: "Nom de l'evenement sur Woopra qui stockera les répondants <a href=\"http://google.com\" target=\"_blank\">blabla</a>"
  fond_image_path: Image de fond du champ
---


