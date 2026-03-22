export const projects = [
  {
    id: "ia",
    title: "Intelligence Artificielle (IA)",
    description: "Analyse de signaux MEG via Machine Learning (KNN, Lasso, MLP) pour la localisation des sources neuronales. Projet Master 2 avec Mme Gautard.",
    tech: ["Python", "Scikit-learn", "MLP", "KNN", "Lasso", "Signal Processing", "LaTeX"],
    files: ["meg_project.py", "meg_report.tex", "meg_report.pdf"],
    primaryPdf: "IA/IA/meg_projet.pdf",
    githubUrl: "https://github.com/Mohamed-Selmani/IA-Project",
    media: [
      { type: "image", path: "IA/IA/model_comparison.png", label: "Comparaison des Modèles" },
      { type: "image", path: "IA/IA/sensor_correlation.png", label: "Corrélation des Capteurs" },
      { type: "image", path: "IA/IA/nn_training.png", label: "Entraînement MLP" }
    ],
    category: "AI / Data Science"
  },
  {
    id: "robot-arm",
    title: "Bras Robotique (Stabilisateur)",
    description: "Conception d'un stabilisateur actif pour bras robotique. Réalisation hardware de A à Z : CAO, Impression 3D, et Asservissement.",
    tech: ["CAD", "3D Printing", "Electronics", "PID Control", "SolidWorks"],
    files: ["Stabilisateur_idea.mp4", "Simulation du circuit en real.MOV"],
    primaryPdf: null,
    githubUrl: "https://github.com/Mohamed-Selmani/Robot-Arm",
    media: [
      { type: "video", path: "Bras Robotique (stabilisateur)/Stabilisateur_idea.mp4", label: "Démo Concept" },
      { type: "video", path: "Bras Robotique (stabilisateur)/Video_Impression 3D.MOV", label: "Fabrication 3D" },
      { type: "image", path: "Bras Robotique (stabilisateur)/Circuit electronique-branchage.HEIC", label: "Électronique" }
    ],
    category: "Robotics"
  },
  {
    id: "drone",
    title: "Drone (Dronove)",
    description: "Conception mécanique et électronique d'un drone innovant avec système de recharge autonome. Étude comparative du marché.",
    tech: ["Catia V5", "Mechatronics", "Aerodynamics", "Business Strategy"],
    files: ["Video_Drone_works.mp4", "Comparaison entre nous et les concurrents (2).pdf"],
    primaryPdf: "Drone (Dronove)/Comparaison entre nous et les concurrents (2).pdf",
    githubUrl: "https://github.com/Mohamed-Selmani/Dronove",
    media: [
      { type: "video", path: "Drone (Dronove)/Video_Drone_works.mp4", label: "Démonstration Vol" },
      { type: "image", path: "Drone (Dronove)/Drone vue Face _real.jpeg", label: "Vue Drone" },
      { type: "image", path: "Drone (Dronove)/station de recharge.jpeg", label: "Station Recharge" }
    ],
    category: "Aerospace"
  },
  {
    id: "mobile-robot",
    title: "Robot Mobile (Limo)",
    description: "Développement d'un système de navigation autonome sous ROS2. Gestion du SLAM, évitement d'obstacles et manipulation via joystick.",
    tech: ["ROS2", "C++", "Python", "SLAM", "Navigation Autonome", "Gazebo"],
    files: ["ROS2 SELMANI MOHAMED REPPORT.pdf", "Video manup autonome (1).mp4", "certificat_Autonomous vehicle (3).pdf"],
    primaryPdf: "Robot Mobile (limo)/Projet limo/ROS2 SELMANI MOHAMED REPPORT.pdf",
    githubUrl: "https://github.com/Mohamed-Selmani/ROS2-Limo",
    media: [
      { type: "video", path: "Robot Mobile (limo)/Projet limo/Video manup autonome (1).mp4", label: "Nav Autonome" },
      { type: "image", path: "Robot Mobile (limo)/Mekahakton 4.0/ROBOT MOBILE.jpeg", label: "Robot Limo" },
      { type: "image", path: "Robot Mobile (limo)/Mekahakton 4.0/LABYRITH.jpeg", label: "Test Labyrinthe" }
    ],
    category: "Autonomous Systems"
  },
  {
    id: "solar-tracker",
    title: "Solar Tracker",
    description: "Optimisation énergétique via un suiveur solaire 2 axes. Conception du PCB, modélisation Catia et algorithmes de tracking.",
    tech: ["Catia", "PCB Design", "Altium", "Embedded Systems", "Automatisme"],
    files: ["PCB_solar-tracker.HEIC", "Catia_SolarTracker.HEIC", "Presentation peojet_jury.MOV"],
    primaryPdf: null,
    githubUrl: "https://github.com/Mohamed-Selmani/Solar-Tracker",
    media: [
      { type: "image", path: "Solar Tracker/Solar_Tracker/PCB_solar-tracker.HEIC", label: "PCB Design" },
      { type: "video", path: "Solar Tracker/Solar_Tracker/Presentation peojet_jury.MOV", label: "Présentation Jury" },
      { type: "image", path: "Solar Tracker/Solar_Tracker/electronique_breadboard et moteurs 2axis.HEIC", label: "Proto Hardware" }
    ],
    category: "Energy / Automation"
  },
  {
    id: "tesca",
    title: "Project Tesca",
    description: "Développement d'une interface de contrôle IHM et conception de cartes électroniques pour systèmes industriels.",
    tech: ["HMI", "FlexPCB", "BLE", "Zephyr RTOS", "Python", "Raspberry Pi", "QA"],
    files: ["Guide Utilisateur IHM_Control.pdf", "PCB_Carte_2W_Documentation (1).pdf", "Rapport des beugs.pdf"],
    primaryPdf: "Tesca/Guide Utilisateur IHM_Control.pdf",
    githubUrl: "https://github.com/Mohamed-Selmani/Tesca-Project",
    media: [
      { type: "image", path: "Tesca/260129_Connecteur_PCB.JPG", label: "Connecteur PCB" },
      { type: "image", path: "Tesca/Brochage.png", label: "Schéma Brochage" }
    ],
    category: "Electronics / Industrial"
  },
  {
    id: "fpga",
    title: "Digital Logic (FPGA)",
    description: "Implémentation de circuits logiques complexes sur FPGA. Architecture matérielle et optimisation de timing.",
    tech: ["VHDL", "Verilog", "FPGA Architecture", "Logic Design", "Vivado"],
    files: ["schematic projet.PNG", "code projet.PNG"],
    primaryPdf: null,
    githubUrl: "https://github.com/Mohamed-Selmani/FPGA-Logic",
    media: [
      { type: "image", path: "Projet FPGA/Projet FPGA/Projet FPGA/schematic projet.PNG", label: "Schématique Logique" },
      { type: "image", path: "Projet FPGA/Projet FPGA/Projet FPGA/code projet.PNG", label: "Capture Code VHDL" }
    ],
    category: "Digital Hardware"
  },
  {
    id: "abs",
    title: "Advanced ABS System",
    description: "Analyse et documentation technique sur les systèmes de freinage antiblocage mécatroniques.",
    tech: ["Automotive Engineering", "Control Systems", "Mechatronics"],
    files: ["Portfolio ABS project.pdf"],
    primaryPdf: "Projet-ABS/Portfolio ABS project.pdf",
    githubUrl: "https://github.com/Mohamed-Selmani/ABS-System",
    media: [],
    category: "Automotive"
  },
  {
    id: "pfe",
    title: "Projet de Fin d'Études",
    description: "Recherche sur la piézoélectricité appliquée à la récupération d'énergie. Rapport complet et analyse théorique.",
    tech: ["R&D", "Energy", "Piezoelectricity", "MATLAB", "ANSYS"],
    files: ["SELMANI MOHAMED-PFE VF (1).pdf"],
    primaryPdf: "PFE/SELMANI MOHAMED-PFE VF (1).pdf",
    githubUrl: "https://github.com/Mohamed-Selmani/PFE-Piezo",
    media: [],
    category: "Final Year Project"
  },
  {
    id: "erp",
    title: "IHM ERP Qualité",
    description: "Interface logicielle ergonomique pour le suivi de la qualité dans un environnement ERP.",
    tech: ["UX/UI Design", "Industrial Software", "Dashboard Design"],
    files: ["IHM_ERP.mp4"],
    primaryPdf: null,
    githubUrl: "https://github.com/Mohamed-Selmani/ERP-Quality",
    media: [
      { type: "video", path: "Video ERP_Qualite/IHM_ERP.mp4", label: "Démo Logicielle" }
    ],
    category: "Software / Quality"
  }
];
