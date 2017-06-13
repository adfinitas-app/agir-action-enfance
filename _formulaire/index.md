---
permalink: /
evenement_woopra: formulaire
panneau_introduction:
  fond_image_path: /uploads/intro-background.jpg
  fond_color:
  texte_html: "<p class='intro-title'>Aider des enfants à se reconstruire après la maltraitance : telle est la mission d’ACTION ENFANCE depuis près de 60 ans.<br /><br />Comptant parmi les rares structures à accueillir ensemble, dans des Villages d’Enfants, les frères et sœurs retirés de leur famille sur décision du Juge des Enfants, elle souhaite recueillir votre avis.<br /><br />Merci de l’aider en répondant à 3 questions. </p>"
  bouton-avis: 'Je donne mon avis'
panneau_question:
  fond_image_path:
  fond_color:
  texte_html:
  champs:
    - type: choix_unique
      nom_machine: question1
      reponses:
        - valeur: 'Oui, je ne savais pas qu’en France les enfants confiés à l’Aide Sociale à l’Enfance étaient si nombreux. '
        - valeur: 'Non, je connaissais ce chiffre'
      options:
        propriete_visiteur: false
        label: "Près de 150 000 enfants sont confiés chaque année à l’Aide Sociale à l’Enfance en raison de maltraitance, de problèmes sociaux et éducatifs. Êtes-vous surpris(e) par ce chiffre\_?"
        placeholder:
        requis: true
        message_erreur: Vous devez choisir
        controle:
        fond_image_path:
        fond_color:
    - type: choix_unique
      nom_machine: question2
      reponses:
        - valeur: 'Je pense que la préservation des liens fraternels est essentielle pour aider ces enfants à surmonter le drame qu’ils ont vécu. '
        - valeur: 'Je ne pense pas que les liens fraternels jouent un rôle indispensable dans la reconstruction de ces enfants. '
      options:
        propriete_visiteur: false
        label: "ACTION ENFANCE accueille les frères et sœurs dans ses 11 Villages d’Enfants et leur offre ainsi un cadre de vie stable, de type familial, leur permettant de grandir ensemble. Que pensez-vous de cette mission\_?"
        placeholder:
        requis: true
        message_erreur: Vous devez choisir
        controle:
        fond_image_path:
        fond_color:
    - type: choix_unique
      nom_machine: question3
      reponses:
        - valeur: '1'
        - valeur: '2'
        - valeur: '3'
        - valeur: '4'
        - valeur: '5'
        - valeur: '6'
        - valeur: '7'
        - valeur: '8'
        - valeur: '9'
        - valeur: '10'
      options:
        propriete_visiteur: false
        label: "ACTION ENFANCE fait partie des acteurs majeurs de la protection de l’enfance en France. Seriez-vous prêt(e) à parler de sa mission autour de vous pour inviter votre entourage à la soutenir\_? (en mettant une note de 1 à 10)"
        placeholder:
        requis: true
        message_erreur: Vous devez choisir
        controle:
        fond_image_path: 
        fond_color:
panneau_informations_personnelles:
  fond_image_path:
  fond_color:
  texte_html: ''
  champs:
    - type: choix_unique
      nom_machine: civility
      reponses:
        - valeur: Madame
        - valeur: Monsieur
      options:
        propriete_visiteur: true
        label:
        placeholder:
        requis: true
        message_erreur: Vous devez remplir ce champ
        controle: civility
        fond_image_path:
        fond_color:
    - type: champ_libre_court
      nom_machine: firstname
      reponses:
        - valeur:
      options:
        propriete_visiteur: true
        label:
        placeholder: 'Prénom*'
        requis: true
        message_erreur: Vous devez remplir ce champ
        controle:
        fond_image_path:
        fond_color:     
    - type: champ_libre_court
      nom_machine: lastname
      reponses:
        - valeur:
      options:
        propriete_visiteur: true
        label:
        placeholder: 'Nom*'
        requis: true
        message_erreur: vous devez remplir ce champ
        controle:
        fond_image_path:
        fond_color:
    - type: champ_libre_court
      nom_machine: telephone
      reponses:
        - valeur:
      options:
        propriete_visiteur: true
        label:
        placeholder: Téléphone
        requis: false
        message_erreur: Vous devez remplir ce champ
        controle: telephone
        fond_image_path:
        fond_color:
    - type: choix_multiple
      nom_machine: optinnps
      reponses:
        - valeur: En répondant au questionnaire, vous acceptez de recevoir des emails de la part de la Fondation Action Enfance. Vous pouvez vous désincrire à tout moment.
      options:
        propriete_visiteur: true
        label:
        placeholder:
        requis: false
        message_erreur:
        controle:
        fond_image_path:
        fond_color:
options:
  bouton_de_soumission: Je valide
  page_de_remerciement_path: /merci.html
  largeur_champ: '100%'
  champs_caches_liste:
    - nom:
      valeur:
      propriete_visiteur: false
  meta:
    title: Questionnaire
    description:
_comments:
  nom: Obligatoire et unique. Description courte du champ
  texte: Ce champ peut etre vide
  placeholder: 'Seulement pour les champs de type "champ libre"'
  controle: 'Seulement pour les champs de type "champ libre"'
  reponses: 'Seulement pour les champs de type "choix"'
  page_de_remerciement_path: "URL de la page lorsque l'utilisateur valide le formulaire"
  propriete_visiteur: Cochez cette case si vous souhaitez que ce champ remonte dans les propriétés du visiteur sur Woopra
  evenement_woopra: "Nom de l'evenement sur Woopra qui stockera les répondants"
  fond_image_path: Image de fond du champ
  largeur_champ: Définit la taille des champs
---
{% include form.html %}
