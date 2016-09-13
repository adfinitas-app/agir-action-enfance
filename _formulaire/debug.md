---
event_woopra: formulaire
panneau_introduction:
  fond_image_path: 'http://placeholder.it/1245x800'
  fond_color:
  texte_html: '<h1>Bonjour the world</h1><h2>un titre de niveau 2 un peu plus long que le titre principal</h2>'
panneau_question:
  fond_image_path:
  fond_color:
  texte_html: '<h2>Hello World niveau 2</h2>'
  champs:
    - type: choix_multiple
      nom_machine: choix-multiple
      reponses:
        - valeur: choix 1
        - valeur: choix 2
        - valeur: choix 3
        - valeur: Autre
      options:
        propriete_visiteur: false
        label: Exemple de champ choix multiple
        placeholder:
        requis: true
        message_erreur: Vous devez choisir
        controle:
        fond_image_path:
        fond_color:
    - type: choix_unique
      nom_machine: choix-unique
      reponses:
        - valeur: Homme
        - valeur: Femme
        - valeur: Autre
      options:
        propriete_visiteur: false
        label: Choix unique
        placeholder:
        requis: true
        message_erreur: Vous devez faire un choix
        controle:
        fond_image_path:
        fond_color:
    - type: champ_libre_long
      nom_machine: textarea
      reponses:
        - valeur:
      options:
        propriete_visiteur: false
        label: Champ long
        placeholder: test
        requis: true
        message_erreur: vous devez saisir un message
        controle:
        fond_image_path:
        fond_color:
    - type: scoring
      nom_machine: score
      reponses:
        - valeur:
      options:
        propriete_visiteur: false
        label: score
        placeholder:
        requis: true
        message_erreur: chsoir
        controle:
        fond_image_path:
        fond_color:
    - type: liste_deroulante
      nom_machine: liste-deroulante
      reponses:
        - valeur: Choix numéro 1
        - valeur: Choix numéro 2
        - valeur: Choix numéro 3
        - valeur: Autre
      options:
        propriete_visiteur: false
        label: Liste déroulante
        placeholder:
        requis: true
        message_erreur: Vous devez faire un choix
        controle:
        fond_image_path:
        fond_color:
panneau_informations_personnelles:
  fond_image_path:
  fond_color:
  texte_html:
  champs:
    - type: champ_libre_court
      nom_machine: firstname
      reponses:
        - valeur:
      options:
        propriete_visiteur: true
        label: Prénom
        placeholder:
        requis: true
        message_erreur: vous devez saisir un numéro de téléphone
        controle:
        fond_image_path:
        fond_color:
    - type: champ_libre_court
      nom_machine: lastname
      reponses:
        - valeur:
      options:
        propriete_visiteur: true
        label: Votre nom
        placeholder: Masselin
        requis: true
        message_erreur: Vous devez indiquer votre nom
        controle:
        fond_image_path:
        fond_color:
    - type: choix_unique
      nom_machine: sexe
      reponses:
        - valeur: Homme
        - valeur: Femme
      options:
        propriete_visiteur: true
        label: Vous êtes ?
        placeholder:
        requis: true
        message_erreur: Vous devez faire un choix
        controle:
        fond_image_path:
        fond_color:
    - type: champ_libre_court
      nom_machine: telephone
      reponses:
        - valeur:
      options:
        propriete_visiteur: true
        label: Téléphone mobile
        placeholder:
        requis: true
        message_erreur: Vous devez indiquer un téléphone
        controle: telephone
        fond_image_path:
        fond_color:
    - type: champ_libre_long
      nom_machine: profil
      reponses:
        - valeur:
      options:
        propriete_visiteur: true
        label: 'Si vous deviez vous décrire, que diriez-vous ?'
        placeholder: Faites votre description
        requis: true
        message_erreur: Vous devez vous décrire
        controle:
        fond_image_path:
        fond_color:
    - type: choix_multiple
      nom_machine: mode communication émail
      reponses:
        - valeur: email
        - valeur: téléphone
        - valeur: papier
      options:
        propriete_visiteur: true
        label:
        placeholder:
        requis: true
        message_erreur:
        controle:
        fond_image_path:
        fond_color:
    - type: liste_deroulante
      nom_machine: choix
      reponses:
        - valeur: liste 1
        - valeur: liste 2
        - valeur: liste 3
        - valeur: Autre
      options:
        propriete_visiteur: true
        label:
        placeholder:
        requis: true
        message_erreur:
        controle:
        fond_image_path:
        fond_color:
    - type: scoring
      nom_machine: score-bis
      reponses:
        - valeur:
      options:
        propriete_visiteur: true
        label: Je connais depuis longtemps la SPA
        placeholder:
        requis: true
        message_erreur: Vous devez faire un choix
        controle:
        fond_image_path:
        fond_color:
options:
  bouton_de_soumission: Envoyer
  page_de_remerciement_path: /index.html
  largeur_champ: '50% centré'
  champs_caches:
    - nom:
      valeur:
      propriete_visiteur: false
  meta:
    title:
    description:
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
  largeur_champ: Définit la taille des champs
---
{% include form.html %}
