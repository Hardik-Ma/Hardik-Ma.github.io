---
layout: page
title: 3D Printing Project
permalink: /projects/project3/
---

<div class="project-container">
  <div class="project-header">
    <h1>Design, Optimization, and Testing of a 3D Printed Bridge</h1>
    
    <!-- Hero Image -->
    <div class="project-hero-image">
      <img src="{{ site.baseurl }}/assets/img/projects/project_3/bridge_hero.png" 
           alt="3D Printed Bridge" 
           class="img-fluid rounded" >
      <p class="image-caption">Final 3D printed bridge model capable of withstanding 100-500N loads</p>
    </div>
  </div>

  <div class="project-section">
    <h2>Problem Statement</h2>
    <p>To design, fabricate, and test a 3D-printed bridge capable of withstanding a minimum load of 100 N and failing at or before 500 N. The bridge had to adhere to strict geometric and manufacturing constraints while being optimized for minimal weight and maximum structural efficiency.</p>
    

  <div class="project-section">
    <h2>Team Members</h2>
    <div class="team-container">
      <div class="team-member">Aditya Sharan</div>
      <div class="team-member">Devansh Dedhia</div>
      <div class="team-member">Jay Naik</div>
      <div class="team-member">Laris Dbritto</div>
      <div class="team-member">Vasanta Manjappa</div>
    </div>
  </div>

  <div class="project-section">
    <h2>My Role</h2>
    <div class="role-container">
      <div class="role-item">
        <h3>Testing & Analysis Lead</h3>
        <ul>
          <li>Designed the experimental procedure and testing setup</li>
          <li>Executed mechanical load tests and collected performance data</li>
          <li>Analyzed simulation data from ANSYS and interpreted failure modes</li>
        </ul>
      </div>
      
      <div class="role-item">
        <h3>Design Optimization</h3>
        <ul>
          <li>Optimized CAD models for structural integrity and printability</li>
          <li>Provided feedback for iterative redesign and print parameter tuning</li>
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
          <li><span class="tool-name">Siemens NX</span> - CAD Modeling</li>
          <li><span class="tool-name">ANSYS Workbench</span> - Static Structural Analysis</li>
          <li><span class="tool-name">Altair Inspire</span> - Topology Optimization</li>
          <li><span class="tool-name">Ultimaker Cura</span> - 3D Print Slicing</li>
        </ul>
      </div>
      
      <div class="tools-col">
        <h3>Hardware & Testing</h3>
        <ul class="tools-list">
          <li><span class="tool-name">Artillery Sidewinder X1</span> - 3D Printer</li>
          <li><span class="tool-name">Custom Test Rig</span> - For Load Testing</li>
          <li><span class="tool-name">Digital Scales</span> - For Weight & Force Measurement</li>
        </ul>
      </div>
    </div>
    
    <!-- Add software/tools image -->
    <div class="project-image">
      <img src="{{ site.baseurl }}/assets/img/projects/project_3/ansys_simulation.png" alt="Software Tools" class="img-fluid rounded">
      <p class="image-caption">ANSYS simulation environment showing deformation analysis of the bridge model</p>
    </div>
  </div>

  <div class="project-section">
    <h2>Design & Engineering Process</h2>
    
    <div class="process-step">
      <h3>1. Conceptualization & Selection</h3>
      <p>We began by evaluating different bridge types using a Pugh Matrix to systematically compare arch, truss, and beam designs based on four key criteria:</p>
      <ul>
        <li>Structural strength</li>
        <li>3D printability</li>
        <li>Material cost efficiency</li>
        <li>Aesthetic appeal</li>
      </ul>
      <p>The analysis led us to select an arch bridge design as the optimal solution for our constraints.</p>
      
      <!-- Add concept selection image -->
      <div class="project-image">
        <img src="{{ site.baseurl }}/assets/img/projects/project_3/concept_selection.png" 
            alt="Concept Selection" class="img-fluid rounded"
            style="width: 80%; max-width: 500px; height: auto;">
        <p class="image-caption">Pugh Matrix analysis of different bridge concepts</p>
      </div>
    </div>
    
    <div class="process-step">
      <h3>2. CAD Development</h3>
      <p>Using Siemens NX, we developed multiple iterations of the bridge, focusing on:</p>
      <ul>
        <li>Initial design with push-fit joints for modular assembly</li>
        <li>Later iterations incorporating Japanese carpentry-inspired interlocking joints for enhanced structural integrity</li>
        <li>Parametric optimization of arch curve, support structures, and cross-sectional profiles</li>
      </ul>
      
      <!-- Add CAD development image -->
      <div class="project-image">
        <img src="{{ site.baseurl }}/assets/img/projects/project_3/cad_development.png" alt="CAD Development" class="img-fluid rounded">
        <p class="image-caption">CAD model evolution showing iterative design improvements</p>
      </div>
    </div>
    
    <div class="process-step">
      <h3>3. FEA Simulation</h3>
      <p>We conducted comprehensive simulations in ANSYS Workbench to analyze:</p>
      <ul>
        <li>Stress distribution under varying load conditions</li>
        <li>Deformation patterns and potential weak points</li>
        <li>Factor of safety across the entire structure</li>
      </ul>
      <p>The old model didnt meet the required performance standard and the design was scrapped. We came up with a new arch design with carpenter joint.</p>
      
      <!-- Add FEA simulation image -->
      <div class="project-image">
        <img src="{{ site.baseurl }}/assets/img/projects/project_3/fea_simulation.png" alt="FEA Simulation" class="img-fluid rounded">
        <p class="image-caption">FEA results showing deformation under load</p>
      </div>
    </div>
    
    <div class="process-step">
      <h3>4. 3D Printing Optimization</h3>
      <p>The printing process required careful tuning of parameters to balance strength, weight, and print time:</p>
      <ul>
        <li>Tested various infill patterns (gyroid, cubic, triangular) and densities (15-30%)</li>
        <li>Optimized support structures to minimize material usage while ensuring printability</li>
        <li>Determined optimal print orientation to align layer lines with load paths</li>
        <li>Fine-tuned print speed and temperature settings for maximum layer adhesion</li>
      </ul>
      
      <!-- Add 3D printing image -->
      <div class="project-image">
        <img src="{{ site.baseurl }}/assets/img/projects/project_3/3d_printing.png" alt="3D Printing" class="img-fluid rounded"
            style="width: 80%; max-width: 500px; height: auto;">
        <p class="image-caption">Bridge components during the printing process on the build plate</p>
      </div>
    </div>
    
    <div class="process-step">
      <h3>5. Iterative Testing</h3>
      <p>We built custom test rigs to evaluate the bridge's performance:</p>
      <ul>
        <li>Initial tests at 100 N (design load) to verify minimum performance requirements</li>
        <li>Progressive loading tests to identify onset of deformation</li>
        <li>Failure testing to determine maximum load capacity and fracture patterns</li>
        <li>Design refinements based on observed failure modes</li>
      </ul>
      
      <!-- Add testing image -->
      <div class="project-image">
        <img src="{{ site.baseurl }}/assets/img/projects/project_3/bridge_testing.png" alt="Bridge Testing" class="img-fluid rounded"
            style="width: 80%; max-width: 800px; height: auto;">
        <p class="image-caption">Custom test rig setup for load testing the printed bridge</p>
      </div>
    </div>
  

  <div class="project-section">
    <h2>Results & Outcome</h2>
    
    <div class="results-grid">
      <div class="result-item">
        <h3>Final Design</h3>
        <p>Our final bridge design achieved optimal performance metrics:</p>
        <ul>
          <li>Weight: 147 grams</li>
          <li>Print Time: ~16 hours</li>
          <li>Material: PLA with optimized infill patterns</li>
        </ul>
      </div>
      
      <div class="result-item">
        <h3>Load Testing</h3>
        <p>The bridge performed precisely within project requirements:</p>
        <ul>
          <li>Successfully withstood the design load of 100 N with minimal deformation</li>
          <li>Fractured just under the 500 N threshold, meeting the upper load constraint</li>
          <li>Exhibited predictable and consistent failure mode aligned with simulation predictions</li>
        </ul>
      </div>
      
      <div class="result-item">
        <h3>Learning Outcomes</h3>
        <p>This project provided valuable hands-on experience in:</p>
        <ul>
          <li>CAD-CAE integration for structural design</li>
          <li>Additive manufacturing workflows and optimization</li>
          <li>Material behavior under load conditions</li>
          <li>Engineering testing methodology and data analysis</li>
        </ul>
      </div>
    </div>
    
    <!-- Add final results image -->
    <div class="project-image">
      <img src="{{ site.baseurl }}/assets/img/projects/project_3/final_results.jpg" alt="Final Results" class="img-fluid rounded">
      <p class="image-caption">Completed bridge undergoing final load testing</p>
    </div>
  </div>
  <div class="back-to-projects">
    <a href="{{ site.baseurl }}/projects/" class="btn" role="button">
      <i class="fas fa-arrow-left mr-2"></i>Back to All Projects
    </a>
  </div>
</div>