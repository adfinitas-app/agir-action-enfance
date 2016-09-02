---
event_woopra: formulaire
panneau_introduction:
  fond_image_path: 'https://www.unicef.fr/sites/default/files/styles/media_header/public/thumbnails/image/kenya-2007.jpg?itok=ZpGQheAM&c=c58a3c2630b8c6934d009e150099b1a6'
  fond_color: '#f10909'
  texte_html: "<h1>Welcome to form</h1><h2>It's funny mais est-ce que ca marche bien</h2>"
panneau_question:
  fond_image_path:
  fond_color:
  texte_html: '<h2>R&eacute;ponds &agrave; ces quelques questions, et tu seras un adorable petit bonhomme</h2><p>Fais gaffe, il y a des pi&egrave;ges !</p>'
  champs:
    - type: champ_libre_court
      nom_machine: exemple-libre-court
      reponses:
        - valeur:
      options:
        propriete_visiteur: false
        label: Exemple de champ libre court
        placeholder: mets la dose
        requis: true
        message_erreur: ce champ est requis
        controle:
        fond_image_path:
        fond_color:
    - type: champ_libre_long
      nom_machine: exemple-libre-long
      reponses:
        - valeur:
      options:
        propriete_visiteur: false
        label: Libre long
        placeholder: "raconte ta life, t'as de la place"
        requis: true
        message_erreur: Il est requis aussi ce champs
        controle:
        fond_image_path:
        fond_color:
    - type: choix_multiple
      nom_machine: choix-multiple
      reponses:
        - valeur: "j'aime"
        - valeur: "j'aime un peu"
        - valeur: autre
      options:
        propriete_visiteur: false
        label: Choisis ta life
        placeholder:
        requis: true
        message_erreur: 'ohoh, tu dois faire un choix'
        controle:
        fond_image_path:
        fond_color:
    - type: choix_unique
      nom_machine: choix-unique
      reponses:
        - valeur: choix 1
        - valeur: choix 2
        - valeur: choix 3
        - valeur: Autre
      options:
        propriete_visiteur: false
        label: One choice only
        placeholder:
        requis: true
        message_erreur: alors tu choisis pas ?
        controle:
        fond_image_path:
        fond_color:
    - type: liste_deroulante
      nom_machine: liste-deroulante
      reponses:
        - valeur: réponse 1
        - valeur: réponse 2
        - valeur: réponse 3
      options:
        propriete_visiteur: false
        label: Liste de choix
        placeholder:
        requis: true
        message_erreur: "tu n'as pas fait de choix."
        controle:
        fond_image_path:
        fond_color:
    - type: scoring
      nom_machine: score
      reponses:
        - valeur:
      options:
        propriete_visiteur: false
        label: score ta vie
        placeholder:
        requis: true
        message_erreur: "tu n'as pas scoré ta life"
        controle:
        fond_image_path:
        fond_color:
panneau_informations_personnelles:
  fond_image_path:
  fond_color:
  texte_html: "<h2>Merci d'indiquer qui tu es et qu'est-ce que tu fais</h2><p>sinon, tu prends mon pied dans les fesses</p>"
  champs:
    - type: champ_libre_court
      nom_machine: firstname
      reponses:
        - valeur:
      options:
        propriete_visiteur: true
        label: Prénom
        placeholder: Votre prénom
        requis: true
        message_erreur: Il faut indiquer un prénom
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
        placeholder: Duss
        requis: true
        message_erreur: 'Duss, il faut indiquer ton nom'
        controle:
        fond_image_path:
        fond_color:
    - type: champ_libre_court
      nom_machine: phone
      reponses:
        - valeur:
      options:
        propriete_visiteur: true
        label: Téléphone
        placeholder: +33 6 15 13 87 88
        requis: true
        message_erreur: Indiquer un numéro de téléphone au format valide
        controle: telephone
        fond_image_path:
        fond_color:
options:
  bouton_de_soumission: Envoyer le formulaire
  page_de_remerciement_path: /index.html
  champs_caches:
    - nom: campagne
      valeur: U45678
      propriete_visiteur: false
    - nom: code_media
      valeur: TTTTTTT
      propriete_visiteur: false
  meta:
    title: Titre de ma page
    description: 'alors la description, ca farte'
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
{% include form.html %}