---
layout: page
title: Bachelor Thesis
permalink: /projects/project1/
---

<div class="project-container">
  <div class="project-header">
    <h1>Thermo-Mechanical Analysis of a RF LINAC Cavity using CFD and FEA</h1>
    
    <!-- Hero Image: Add a main image of the LINAC cavity model or simulation result -->
    <div class="project-hero-image">
      <img src="{{ site.baseurl }}/assets/img/projects/project_1/solid_model.png" alt="RF LINAC Cavity Model" class="img-fluid rounded">
      <p class="image-caption">3D Model of the 17-cell OFHC Copper LINAC Cavity with Cooling Channels</p>
    </div>
  </div>

  <div class="project-section">
    <h2>Problem Statement</h2>
    <p>The performance of RF Linear Accelerator (LINAC) cavities is critically affected by RF-pulsed heating, which induces structural deformation and frequency shift, limiting the maximum accelerating gradient. This project aimed to optimize the thermal and structural performance of a 17-cell Oxygen-Free High Conductivity (OFHC) copper LINAC cavity by analyzing the impact of varying heat loads and cooling water flow rates, enhancing frequency stability and overall accelerator efficiency.</p>
    
    <!-- Add an image illustrating the problem: perhaps a diagram showing RF heating effects -->
    <div class="project-image">
      <img src="{{ site.baseurl }}/assets/img/projects/project_1/solid_model_section.jpg" alt="RF Heating Effects on LINAC Cavity" class="img-fluid rounded">
      <p class="image-caption">3D model of the LINAC displaying cells and water jacket</p>
    </div>
  </div>

  <div class="project-section">
    <h2>My Role</h2>
    <div class="role-container">
      <div class="role-item">
        <h3>Team Leader & Project Manager</h3>
        <ul>
          <li>Oversaw the entire project lifecycle</li>
          <li>Coordinated efforts among simulation and design sub-teams</li>
          <li>Ensured timely delivery of project milestones</li>
        </ul>
      </div>
      
      <div class="role-item">
        <h3>Simulation Engineer</h3>
        <ul>
          <li>Conducted advanced thermal and structural simulations</li>
          <li>Validated energy balance across the system</li>
          <li>Quantified effects of thermal loading on frequency shift using ANSYS</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="project-section">
    <h2>Tools & Skills Used</h2>
    
    <div class="tools-container">
      <div class="tools-col">
        <h3>Software</h3>
        <ul class="tools-list">
          <li><span class="tool-name">ANSYS Fluent</span> - Computational Fluid Dynamics</li>
          <li><span class="tool-name">ANSYS Mechanical</span> - Finite Element Analysis</li>
          <li><span class="tool-name">SolidWorks</span> - CAD Modeling</li>
        </ul>
      </div>
      
      <div class="tools-col">
        <h3>Technical Skills</h3>
        <ul class="skills-list">
          <li>Conjugate Heat Transfer Modeling</li>
          <li>Fluid-Structure Interaction (FSI) using partitioned approach</li>
          <li>Mesh quality optimization and boundary condition setup</li>
          <li>Parametric studies and result interpretation</li>
          <li>Frequency shift analysis using empirical relations</li>
        </ul>
      </div>
    </div>
    
    <!-- Add an image of the software interface or modeling process -->
    <div class="project-image">
      <img src="{{ site.baseurl }}/assets/img/projects/project_1/Ansys_Mesh.jpg" alt="ANSYS Simulation Environment" class="img-fluid rounded">
      <p class="image-caption">Advanced mesh refinement at the solid-liquid interface</p>
    </div>
  </div>

  <div class="project-section">
    <h2>Design & Engineering Process</h2>
    
    <div class="process-step">
      <h3>1. Problem Formulation</h3>
      <p>Defined key performance metrics for the cavity optimization:</p>
      <ul>
        <li>Temperature distribution across the cavity</li>
        <li>Stress and strain profiles under thermal load</li>
        <li>Structural deformation patterns</li>
        <li>Resulting frequency shift during operation</li>
      </ul>
    </div>
    
    <div class="process-step">
      <h3>2. Model Setup</h3>
      <p>Built a 3D model of a 17-cell LINAC cavity with helical water cooling channels designed to efficiently extract heat.</p>
      
      <!-- Add an image of the CAD model -->
      <div class="project-image">
        <img src="{{ site.baseurl }}/assets/img/projects/project_1/computational_domain.jpg" alt="CAD Model of LINAC Cavity" class="img-fluid rounded">
        <p class="image-caption">3D model of the cavity showing computational domain</p>
      </div>
    </div>
    
    <div class="process-step">
      <h3>3. Thermal Analysis (CFD)</h3>
      <p>Using ANSYS Fluent, we simulated:</p>
      <ul>
        <li>RF-induced heat loads ranging from 0.8 kW to 1.8 kW</li>
        <li>Water flow rates varying between 15 LPM and 35 LPM</li>
        <li>Temperature distribution patterns across all cavity cells</li>
      </ul>
      <p>The analysis revealed a linear temperature rise with increasing heat load and an exponential decay pattern with increased cooling flow rate.</p>
      
      <!-- Add thermal simulation results image -->
      <div class="project-image">
        <img src="{{ site.baseurl }}/assets/img/projects/project_1/Temperature_contours.jpg" alt="Thermal Analysis Results" class="img-fluid rounded">
        <p class="image-caption">Temperature distribution for 1.8 kW heat load and 23 LPM water flow rate</p>
      </div>
    </div>
    
    <div class="process-step">
      <h3>4. Structural Analysis (FEA)</h3>
      <p>Using ANSYS Mechanical, we:</p>
      <ul>
        <li>Imported temperature profiles from the CFD analysis</li>
        <li>Computed resulting stress, strain, and deformation patterns</li>
        <li>Validated that all values remained below the yield limits of OFHC copper</li>
      </ul>
      
      <!-- Add structural analysis results image -->
      <div class="project-image">
        <img src="{{ site.baseurl }}/assets/img/projects/project_1/structural_deformation.jpg" alt="Structural Analysis Results" class="img-fluid rounded">
        <p class="image-caption">Total deformation for 1.8 kW heat load and 23 LPM water flow rate</p>
      </div>
    </div>
    
    <div class="process-step">
      <h3>5. Frequency Shift Estimation</h3>
      <p>To complete the optimization analysis:</p>
      <ul>
        <li>Calculated node-to-node displacements from the structural analysis</li>
        <li>Applied empirical geometry sensitivity coefficients to evaluate frequency shifts</li>
        <li>Found significant shift reduction with increased coolant flow</li>
      </ul>
      
      <!-- Add frequency shift graph -->
      <div class="project-image-group">
        <div class="project-image">
          <img src="{{ site.baseurl }}/assets/img/projects/project_1/frequency shift_1.png" alt="Frequency Shift Analysis 1" class="img-fluid rounded">
          <p class="image-caption">Graph showing frequency shift reduction with increasing flow rates for cell 1</p>
        </div>
        <div class="project-image">
          <img src="{{ site.baseurl }}/assets/img/projects/project_1/frequency shift_2.png" alt="Frequency Shift Analysis 2" class="img-fluid rounded">
          <p class="image-caption">Graph comparing frequency shift across different heat loads for cell 2</p>
        </div>
      </div>
    </div>
  
  <div class="project-section">
    <h2>Results & Outcome</h2>
    
    <div class="results-grid">
      <div class="result-item">
        <h3>Temperature Gradient</h3>
        <p>Temperature gradient across the linear accelerator inside the cavities is studied for varying flow rates of water at different heat loads.</p>
      </div>
      
      <div class="result-item">
        <h3>Structural Safety</h3>
        <p>Maximum stress (89 MPa) remained well below OFHC copper's yield strength (~206 MPa), ensuring safe operation even under peak load conditions.</p>
      </div>
      
      <div class="result-item">
        <h3>Performance Gain</h3>
        <p>Frequency shift was reduced by over 15% by increasing water flow from 15 to 35 LPM, enabling higher achievable accelerating gradients.</p>
      </div>
      
      <div class="result-item">
        <h3>Validation</h3>
        <p>Energy balance between input heat load and simulated heat extracted by water showed less than 2% deviation, ensuring simulation accuracy.</p>
      </div>
    </div>
    
  </div>

  <div class="project-section">
    <h2>Recognition</h2>
    <div class="recognition-box">
      <p>This work was presented at the <strong>24th National and 2nd International ISHMT-ASTFE Heat and Mass Transfer Conference (IHMTC-2017)</strong> held at BITS Pilani, Hyderabad.</p>
      
      <!-- Add conference presentation image if available -->
      <div class="project-image">
        <img src="{{ site.baseurl }}/assets/img/projects/project_1/Conference.jpg" alt="Conference Presentation" class="img-fluid rounded">
        <p class="image-caption">Presenting research findings at IHMTC-2017</p>
      </div>

      <!-- Add publication link -->
      <p class="publication-link">
        <strong>Publication:</strong> <a href="https://www.dl.begellhouse.com/references/497665e8310dfd2d,6e9515933d4aa1cf,2153c616416673a8.html" target="_blank" rel="noopener noreferrer">Read the full conference paper</a>
      </p>
    </div>
  </div>

  <!-- Back to Projects Button -->
  <div class="back-to-projects">
    <a href="{{ site.baseurl }}/projects/" class="btn" role="button">
      <i class="fas fa-arrow-left mr-2"></i>Back to All Projects
    </a>
  </div>
  
</div>
