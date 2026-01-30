# 🏥 MyMed - Application Angular

## 📋 Vue d'ensemble

**MyMed Management System** est une application web moderne de gestion de cabinet médical développée avec Angular 18. Elle offre une interface intuitive et complète pour gérer les patients, leurs dossiers médicaux, les rendez-vous et le personnel médical.

### 🎯 Objectifs principaux

- Centraliser toutes les informations patients et leur historique médical
- Simplifier la prise et la gestion des rendez-vous
- Faciliter le suivi médical avec une timeline chronologique
- Améliorer la collaboration entre professionnels de santé
- Optimiser les flux de travail du cabinet médical

---

## 🔑 Fonctionnalités Métier Principales

### 1️⃣ **Gestion des Patients**

#### 📊 Vue Détaillée du Patient
La vue patient offre un accès centralisé à toutes les informations essentielles :

**Informations personnelles complètes :**
- État civil : nom, prénom, date de naissance, âge calculé automatiquement
- Coordonnées : adresse complète, email, téléphone
- Informations administratives : numéro de sécurité sociale, médecin traitant
- Indicateurs visuels : groupe sanguin avec badge coloré

**Informations médicales critiques :**
- **Allergies** : Liste exhaustive des allergies connues avec affichage en badges rouges pour une visibilité immédiate
- **Maladies chroniques** : Suivi des pathologies de longue durée avec badges oranges pour un repérage rapide
- Système de badges colorés pour une lecture instantanée des risques

**Navigation par onglets :**
- `Historique` : Consultation complète des dossiers médicaux passés
- `Nouveau dossier` : Création rapide d'une nouvelle consultation
- Interface intuitive avec compteur de dossiers

**Cas d'usage métier :**
- Le médecin reçoit M. Dupont : il accède rapidement à ses allergies (Pénicilline) avant toute prescription
- L'infirmière vérifie les maladies chroniques (Diabète Type 2, Hypertension) pour adapter le traitement
- Le secrétariat consulte les coordonnées pour rappeler le patient pour un rendez-vous

---

#### 📝 Création et Gestion des Dossiers Médicaux

**Timeline chronologique interactive :**
Chaque consultation est représentée dans une timeline verticale qui permet de :
- Visualiser l'historique médical complet du patient de manière chronologique
- Identifier rapidement les consultations par type (Générale, Urgence, Spécialisée, etc.)
- Suivre l'évolution de l'état de santé sur plusieurs mois/années

**Création de dossier médical :**
Interface complète permettant de documenter chaque consultation :

**Type de consultation (sélection visuelle par icônes) :**
- 🩺 **Générale** : Consultation de routine, bilans de santé
- 🚑 **Urgence** : Interventions urgentes nécessitant un traitement immédiat
- 🔬 **Spécialisée** : Consultations avec des spécialistes (cardiologue, dermatologue...)
- 📋 **Suivi** : Contrôles réguliers pour maladies chroniques
- 💉 **Vaccination** : Injections et rappels vaccinaux
- 📊 **Bilan** : Examens complets de santé, check-ups annuels

**Informations de consultation :**
- **Date** : Horodatage précis de la consultation
- **Médecin traitant** : Identification du praticien ayant effectué l'examen
- **Diagnostic** : Description détaillée de l'état du patient et des symptômes observés
- **Traitement prescrit** : Médicaments, dosages, durée du traitement
- **Observations** : Notes complémentaires du médecin (effets secondaires, recommandations...)
- **Résultats de tests** : Intégration des analyses de laboratoire, imagerie médicale

**Fonctionnalités avancées :**
- Filtrage des dossiers par type de consultation
- Chargement progressif ("Load More") pour les historiques volumineux
- Affichage optimisé : 5 dossiers initiaux, puis chargement par lots
- Tri chronologique : du plus récent au plus ancien

**Cas d'usage métier :**
- Dr. Martin consulte l'historique et voit que Mme. Durand a eu 3 consultations d'urgence en 2 mois → approfondit l'investigation
- L'assistant médical prépare le dossier avant la consultation : il voit la dernière prescription (antibiotiques terminés il y a 1 semaine)
- Le patient demande une copie de ses analyses : export facile via le dossier médical

---

### 2️⃣ **Gestion des Rendez-vous**

#### 📅 Calendrier Hebdomadaire Intelligent

**Vue calendrier professionnelle :**
Interface inspirée des agendas médicaux avec :
- **Timeline horaire** : Affichage de 8h à 18h (horaires de consultation standard)
- **Vue semaine** : 7 colonnes (Lundi à Dimanche)
- **Indicateur temps réel** : Ligne rouge indiquant l'heure actuelle
- **Navigation fluide** : Boutons "Semaine précédente" / "Semaine suivante" / "Aujourd'hui"

**Positionnement automatique des rendez-vous :**
- Calcul intelligent de la position verticale selon l'heure
- Hauteur proportionnelle à la durée du rendez-vous
- Gestion automatique des chevauchements
- Code couleur par statut :
  - 🟦 **Bleu** : Programmé (SCHEDULED)
  - 🟩 **Vert** : Confirmé (CONFIRMED)
  - 🟨 **Jaune** : Complété (COMPLETED)
  - 🟥 **Rouge** : Annulé (CANCELLED)
  - ⬜ **Gris** : Absent (NO_SHOW)

**Informations affichées sur chaque créneau :**
- Heure de début et durée
- Nom du patient
- Type de rendez-vous (Consultation, Urgence, Suivi...)
- Médecin assigné
- Statut actuel

**Filtrage intelligent :**
- Filtre par médecin : afficher uniquement les rendez-vous d'un praticien
- Filtre par statut : isoler les rendez-vous confirmés, annulés...
- Vue globale ou personnalisée selon les besoins

**Cas d'usage métier :**
- Dr. Lefebvre arrive à 8h : elle consulte son planning du jour et voit 8 patients programmés
- La secrétaire détecte un créneau libre à 14h30 : elle peut proposer ce slot au patient qui appelle
- Fin de journée : comptabilisation automatique des rendez-vous complétés vs absents

---

#### ✍️ Prise de Rendez-vous Guidée

**Processus de réservation en 5 étapes :**

1. **Sélection du patient :**
   - Recherche rapide par nom
   - Dropdown avec auto-complétion
   - Affichage des informations clés (âge, médecin traitant)

2. **Choix du médecin :**
   - Liste déroulante des praticiens disponibles
   - Filtrage par spécialité
   - Indication de la disponibilité en temps réel

3. **Sélection de la date :**
   - Calendrier visuel interactif
   - Désactivation automatique des dates passées
   - Mise en évidence des jours avec forte affluence

4. **Choix de l'heure :**
   - **Grille de créneaux horaires** : affichage visuel des plages disponibles
   - Créneaux de 30 minutes par défaut (personnalisable)
   - Code couleur :
     - 🟢 **Disponible** : Créneau libre
     - 🔴 **Réservé** : Créneau occupé
   - Appel API temps réel pour vérifier la disponibilité

5. **Détails du rendez-vous :**
   - Type de consultation (Consultation, Urgence, Suivi, Vaccination...)
   - Motif de consultation (champ texte libre)
   - Notes complémentaires (facultatif)
   - Durée personnalisable (15min, 30min, 1h...)

**Validation intelligente :**
- Vérification de la cohérence des données
- Détection des doublons (même patient, même jour)
- Alerte si le créneau vient d'être réservé par un autre utilisateur
- Confirmation visuelle de la réservation

**Cas d'usage métier :**
- Patient Mme. Bernard appelle pour un rendez-vous urgent : la secrétaire trouve un créneau dans 2h avec le Dr. Petit
- M. Rousseau souhaite un suivi diabète : le système propose automatiquement les créneaux du Dr. Martin (endocrinologue)
- Réservation en ligne : le patient choisit lui-même son créneau sur le portail web

---

#### 🔍 Détail et Actions sur un Rendez-vous

**Fiche complète du rendez-vous :**
Interface détaillée affichant :

**Informations du rendez-vous :**
- Date et heure exactes
- Durée prévue
- Type de consultation
- Statut actuel (badge coloré)
- Motif de consultation
- Notes éventuelles

**Informations patient associé :**
- Nom complet, âge
- Numéro de téléphone pour rappel
- Allergies et maladies chroniques (rappel sécurité)
- Lien vers le dossier patient complet

**Informations médecin :**
- Nom du praticien
- Spécialité
- Salle de consultation
- Photo de profil

**Actions disponibles selon le statut :**

1. **Annuler** (bouton rouge) :
   - Passage du statut à CANCELLED
   - Envoi automatique de notification au patient
   - Libération du créneau horaire
   - Possibilité d'ajouter un motif d'annulation

2. **Reporter** (bouton bleu) :
   - Ouverture du module de prise de rendez-vous
   - Pré-remplissage avec les mêmes informations
   - Proposition de nouveaux créneaux disponibles
   - Annulation automatique de l'ancien rendez-vous

3. **Marquer comme complété** (bouton vert) :
   - Passage du statut à COMPLETED
   - Déclenchement de la création d'un dossier médical
   - Mise à jour des statistiques du médecin

4. **Confirmer** (bouton vert clair) :
   - Passage de SCHEDULED à CONFIRMED
   - Envoi d'un rappel SMS/email au patient

**Historique des rendez-vous précédents :**
- Affichage des 3 derniers RDV du patient avec ce médecin
- Consultation rapide des diagnostics antérieurs
- Continuité du suivi médical

**Résultats de laboratoire :**
- Section dédiée si le rendez-vous fait suite à des analyses
- Affichage des résultats (PDF, valeurs numériques)
- Alertes automatiques si valeurs anormales

**Cas d'usage métier :**
- Patient appelle pour annuler : la secrétaire annule en 2 clics et libère le créneau
- Dr. Durand termine sa consultation : elle marque le RDV "complété" et crée directement le dossier médical
- Rappel automatique : 24h avant, SMS envoyé au patient pour confirmer sa présence

---

### 3️⃣ **Gestion du Personnel Médical**

#### 👨‍⚕️ Répertoire des Médecins

**Liste complète des praticiens :**
Affichage en grille de cartes professionnelles contenant :

**Informations du médecin :**
- Photo de profil professionnelle
- Nom complet et titre (Dr.)
- Spécialité médicale (badge coloré)
- Contact : email et téléphone
- Cabinet / Salle de consultation

**Indicateurs de performance :**
- ⭐ **Note moyenne** : Évaluation des patients (sur 5)
- 💬 **Nombre d'avis** : Compteur de retours patients
- 📊 **Taux de disponibilité** : Pourcentage de créneaux libres

**Statut en temps réel :**
- 🟢 **Disponible** : Médecin présent, créneaux libres
- 🟡 **Occupé** : En consultation
- 🔴 **Hors ligne** : Absent, congés, formation

**Filtrage avancé :**

1. **Par spécialité :**
   - Médecine générale
   - Cardiologie
   - Dermatologie
   - Pédiatrie
   - Gynécologie
   - Ophtalmologie
   - ORL
   - Psychiatrie
   - Et toutes autres spécialités...

2. **Par disponibilité :**
   - Uniquement les médecins disponibles immédiatement
   - Médecins avec créneaux dans les 24h
   - Planning ouvert sur la semaine

3. **Par notation :**
   - Minimum 4 étoiles
   - Minimum 3 étoiles
   - Tri par meilleure note

4. **Par recherche textuelle :**
   - Recherche par nom
   - Recherche par spécialité
   - Auto-complétion intelligente

**Tri personnalisable :**
- Par note (meilleurs praticiens en premier)
- Par disponibilité (créneaux libres en priorité)
- Par expérience (ancienneté)
- Ordre alphabétique

**Action principale :**
- Bouton **"Prendre rendez-vous"** sur chaque fiche
- Redirection automatique vers le formulaire de RDV avec le médecin pré-sélectionné

**Pagination :**
- Affichage de 12 médecins par page
- Navigation intuitive entre les pages
- Indication du nombre total de résultats

**Cas d'usage métier :**
- Patient cherche un dermatologue bien noté : filtre "Dermatologie + min 4 étoiles" → 3 résultats
- Urgence dentaire : filtre "Disponible maintenant" → Dr. Blanc a un créneau dans 1h
- Nouveau patient veut choisir son médecin traitant : consulte les fiches et avis avant de décider

---

## 🎨 Caractéristiques Techniques de l'Interface

### Design Moderne et Professionnel

**Système de design cohérent :**
- **Palette de couleurs médicale** : Bleu (primary), vert (success), rouge (danger), orange (warning)
- **Typographie claire** : Police sans-serif optimisée pour la lisibilité
- **Espacements harmonieux** : Marges et paddings calculés pour le confort visuel
- **Hiérarchie visuelle** : Titres, sous-titres, corps de texte différenciés

**Composants UI professionnels :**
- **Badges de statut** : Arrondis, colorés, avec icônes
- **Cards élégantes** : Ombres subtiles, hover effects
- **Formulaires structurés** : Labels clairs, validation en temps réel
- **Boutons d'action** : Couleurs sémantiques, icons Material Symbols
- **Modals et overlays** : Transitions fluides

### Mode Sombre (Dark Mode)

**Basculement automatique ou manuel :**
- Détection des préférences système de l'utilisateur
- Toggle manuel dans les paramètres
- Sauvegarde de la préférence en localStorage

**Adaptation complète de l'interface :**
- Arrière-plans sombres (#1e293b, #0f172a)
- Textes clairs pour la lisibilité (#f1f5f9, #e2e8f0)
- Contraste optimisé pour réduire la fatigue oculaire
- Bordures et ombres ajustées
- Icons et badges adaptés

**Cas d'usage métier :**
- Dr. Moreau travaille en garde de nuit : le mode sombre préserve sa vision
- Secrétariat en horaires décalés : confort visuel amélioré

### Responsive Design

**Adaptation multi-appareils :**
- 📱 **Mobile** : Navigation simplifiée, touch-friendly
- 📱 **Tablette** : Interface optimisée pour consultation sur iPad
- 💻 **Desktop** : Exploitation maximale de l'espace écran

**Breakpoints gérés par Tailwind CSS :**
- `sm` : 640px (téléphones paysage)
- `md` : 768px (tablettes)
- `lg` : 1024px (laptops)
- `xl` : 1280px (grands écrans)
- `2xl` : 1536px (écrans 4K)

**Composants adaptatifs :**
- Grilles responsive : 1 colonne mobile → 2 colonnes tablette → 3 colonnes desktop
- Menu burger sur mobile, sidebar sur desktop
- Cartes empilées sur mobile, côte-à-côte sur desktop

**Cas d'usage métier :**
- Dr. Petit consulte son planning sur smartphone entre deux consultations
- Infirmière utilise une tablette pour saisir les dossiers au chevet du patient
- Secrétariat travaille sur ordinateur de bureau avec double écran

### Accessibilité (a11y)

**Conformité WCAG :**
- Contraste minimum de 4.5:1 pour le texte normal
- Contraste minimum de 3:1 pour le texte large
- Navigation au clavier complète
- Attributs ARIA pour les lecteurs d'écran
- Labels explicites sur tous les champs de formulaire

**Fonctionnalités d'accessibilité :**
- Focus visible sur tous les éléments interactifs
- Textes alternatifs pour les images
- Messages d'erreur explicites et contextuels
- Tailles de police ajustables

---


## 🚀 Workflow Complet : Parcours Patient

### Scénario : Consultation Complète de A à Z

**1. Prise de contact initial :**
- Le patient appelle pour un premier rendez-vous
- La secrétaire crée le dossier patient avec informations administratives
- Saisie des allergies et maladies chroniques déclarées

**2. Réservation du rendez-vous :**
- Recherche de créneaux disponibles avec Dr. Martin (médecin traitant)
- Sélection d'un créneau : Mardi 15 janvier à 10h00
- Type : Consultation générale
- Motif : "Toux persistante depuis 1 semaine"
- Envoi d'une confirmation par SMS

**3. Rappel automatique :**
- 24h avant : SMS de rappel envoyé au patient
- Le patient confirme sa présence via lien

**4. Jour de la consultation :**
- Dr. Martin ouvre le dossier patient sur sa tablette
- Consultation des allergies : "Pénicilline" → à éviter
- Examen du patient, diagnostic : "Bronchite aiguë"
- Prescription : "Amoxicilline (sauf allergie), Sirop pour la toux"

**5. Création du dossier médical :**
- Type : Consultation générale
- Diagnostic : "Bronchite aiguë"
- Traitement : "Repos, hydratation, antibiotiques alternatifs"
- Observations : "Revoir dans 7 jours si pas d'amélioration"
- Sauvegarde dans l'historique du patient

**6. Marquage du rendez-vous :**
- Statut passé à "COMPLETED"
- Prochaine consultation de suivi programmée : +7 jours

**7. Suivi post-consultation :**
- Le patient revient 7 jours plus tard
- Dr. Martin consulte le dossier précédent dans la timeline
- Constate l'amélioration, clôture le suivi

---

## 🔧 Technologies Utilisées

### Frontend
- **Angular 18** : Framework principal
- **TypeScript 5** : Typage fort et moderne
- **Tailwind CSS 3** : Framework CSS utilitaire
- **RxJS** : Programmation réactive
- **Material Symbols** : Bibliothèque d'icônes Google

### Backend (Architecture Microservices Spring Boot)
- **Spring Cloud** : Gestion des microservices
- **Eureka** : Service discovery
- **API Gateway** : Point d'entrée unique
- **Spring Data JPA** : Persistance des données
- **PostgreSQL** : Base de données relationnelle


---




## 📄 Licence et Crédits

**Licence :** MIT

**Développé par :** MyMed Frontend Team

**Version :** 2.0.0

**Date :** Janvier 2025

---

## 🎓 Conclusion

**MyMed Management System** est une solution complète, moderne et intuitive qui digitalise l'ensemble des processus d'un cabinet médical. De la prise de rendez-vous à la gestion des dossiers médicaux, en passant par le suivi des patients et la coordination de l'équipe médicale, chaque fonctionnalité a été pensée pour améliorer l'efficacité et la qualité des soins.

**Points forts :**
- ✅ Interface utilisateur élégante et professionnelle
- ✅ Workflow optimisé pour les professionnels de santé
- ✅ Sécurité et conformité RGPD
- ✅ Architecture scalable et maintenable
- ✅ Documentation exhaustive

**Prêt pour la production** et évolutif selon les besoins futurs du secteur médical.

---

*Pour toute question ou suggestion, n'hésitez pas à me contacter hamzabeng64@gmail.com.*
