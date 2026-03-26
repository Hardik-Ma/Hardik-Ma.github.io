---
layout: page
title: Automation Project
permalink: /projects/project5/
---

<div class="project-container">
  <div class="project-header">
    <h1>GT-9050: Automated Rotor House Fastening</h1>
    
    <!-- Hero Image -->
    <div class="project-hero-image">
      <img src="{{ site.baseurl }}/assets/img/projects/project_5/solution_3.png" 
           alt="Automated Rotor House Fastening System" 
           class="img-fluid rounded" 
           style="width: 80%; max-width: 600px; height: auto;">
      <p class="image-caption">Conceptual prototype of the automated fastening system for offshore wind turbine rotor houses</p>
    </div>
  </div>

  <div class="project-section">
    <h2>Problem Statement</h2>
    <p>The traditional bolt fastening and tensioning process in generator rotor houses is labor-intensive, varied, and poses ergonomic challenges due to the vertical orientation and high-torque requirements. As offshore wind turbine designs evolve, a scalable, automated solution is needed to handle diverse bolt configurations and torque specifications efficiently and reliably.</p>
    
    <!-- Add a conceptual image -->
    <div class="project-image">
      <img src="{{ site.baseurl }}/assets/img/projects/project_5/rotor_house.jpg" alt="Traditional Fastening Challenges" class="img-fluid rounded"
      style="width: 80%; max-width: 600px; height: auto;">
      <p class="image-caption">Rotor House of offshore wind turbines. Source: Google Images </p>
    </div>
  </div>

  <div class="project-section">
    <h2>Objective</h2>
    <div class="objective-box">
      <p>To design a modular, automated system capable of handling varying bolt circle arrangements, bolt sizes (torque levels), and tensioning requirements for rotor houses in offshore wind turbines.</p>
    </div>
  </div>

  <div class="project-section">
    <h2>Team Members</h2>
    <div class="team-container">
      <div class="team-member">Nithyashree Ravishankar</div>
      <div class="team-member">Malavika Krishnan Kunnath</div>
      <div class="team-member">Mihir Palasamudram</div>
      <div class="team-member">Smit Suthar</div>
      <div class="team-member">Malay Sharad Jaiswal</div>
    </div>
    
    <h3>Project Sponsors</h3>
    <div class="team-container">
      <div class="team-sponsor">Kraemer, Boy Dario: Project Manager, Tools and Automation</div>
      <div class="team-sponsor">Lucius, Zita: Senior Innovation Manager</div>
    </div>
  </div>

  <div class="project-section">
    <h2>My Role</h2>
    <div class="role-container">
      <div class="role-item">
        <h3>Product Owner</h3>
        <p>I led the project execution and concept development, taking responsibility for:</p>
        <ul>
          <li>Coordinating cross-functional efforts between mechanical and electrical teams</li>
          <li>Ensuring alignment with VDI 2221 and VDI 2206 engineering standards</li>
          <li>Facilitating Agile workflows and sprint planning</li>
          <li>Acting as the primary point of contact for project sponsors and stakeholders</li>
          <li>Overseeing quality control and documentation</li>
        </ul>
      </div>
    </div>
    
    <!-- Add an image showing your role -->
    <div class="project-image">
      <img src="{{ site.baseurl }}/assets/img/projects/project_5/gant_chart.png" alt="Product Owner Role" class="img-fluid rounded"
      style="width: 80%; max-width: 700px; height: auto;">
      <p class="image-caption">Project Gant Chart</p>
    </div>
  </div>

  <div class="project-section">
    <h2>Tools & Skills Used</h2>
    
    <div class="tools-container">
      <div class="tools-col">
        <h3>Methodologies & Standards</h3>
        <ul class="tools-list">
          <li><span class="tool-name">Agile methodology (Scrum)</span> - Iterative development approach</li>
          <li><span class="tool-name">VDI 2221</span> - Systematic approach to product development</li>
          <li><span class="tool-name">VDI 2206</span> - V-model for mechatronic systems</li>
        </ul>
      </div>
      
      <div class="tools-col">
        <h3>Tools & Techniques</h3>
        <ul class="tools-list">
          <li><span class="tool-name">Jira</span> - Project management platforms</li>
          <li><span class="tool-name">Morphological Matrix</span> - Concept generation</li>
          <li><span class="tool-name">Black Box Modeling</span> - System abstraction</li>
          <li><span class="tool-name">Decision Matrices</span> - Concept evaluation with quality parameters</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="project-section">
    <h2>Design & Engineering Process</h2>
    <p>Following the V-model (VDI 2206) and VDI 2221 methodology, we systematically approached the design challenge:</p>
    
    <div class="process-step">
      <h3>1. Requirements Engineering</h3>
      <p>Compiled comprehensive technical specifications and user needs, including:</p>
      <ul>
        <li>Bolt sizes and torque specifications for different turbine models</li>
        <li>Ergonomic considerations for system operation</li>
        <li>Environmental constraints for offshore deployment</li>
        <li>Safety requirements for automated high-torque operations</li>
        <li>Adaptability needs for evolving turbine designs</li>
      </ul>
      
    </div>
    
    <div class="process-step">
      <h3>2. Black Box Modeling</h3>
      <p>Created system abstraction to analyze input/output relationships, defining:</p>
      <ul>
        <li>Energy flows (electrical, mechanical)</li>
        <li>Material interfaces (fasteners, rotor house)</li>
        <li>Signal processing requirements</li>
        <li>Information flows between subsystems</li>
      </ul>
      
      <!-- Add black box model image -->
      <div class="project-image">
        <img src="{{ site.baseurl }}/assets/img/projects/project_5/blackbox.png" alt="Black Box Model" class="img-fluid rounded"
        style="width: 80%; max-width: 600px; height: auto;">
        <p class="image-caption">Black box system model showing inputs, processes, and outputs</p>
      </div>
    </div>
    
    <div class="process-step">
      <h3>3. Functional Decomposition</h3>
      <p>Broke down the system into core functional modules:</p>
      <ul>
        <li>Positioning System - Locates bolts in various configurations</li>
        <li>Fastening Mechanism - Applies appropriate torque</li>
        <li>Control System - Manages operation sequences</li>
        <li>Sensing & Feedback - Monitors fastening quality</li>
        <li>Interface & Adaptability - Handles different bolt patterns</li>
      </ul>
      
      <!-- Add functional decomposition image -->
      <div class="project-image">
        <img src="{{ site.baseurl }}/assets/img/projects/project_5/functional_diagram.jpg" alt="Functional Decomposition" class="img-fluid rounded"
        style="width: 80%; max-width: 600px; height: auto;">
        <p class="image-caption">Functional breakdown of the automated fastening system</p>
      </div>
    </div>
    
    <div class="process-step">
      <h3>4. Concept Generation</h3>
      <p>Utilized a morphological matrix approach to explore solution combinations for each functional module, generating diverse concepts for:</p>
      <ul>
        <li>Fastening technologies (hydraulic, electric, pneumatic)</li>
        <li>Positioning mechanisms (robotic arm, gantry system, turntable)</li>
        <li>Sensing approaches (torque feedback, vision systems, load cells)</li>
        <li>Modular adaptability strategies</li>
      </ul>
      
      <!-- Add concept generation image -->
      <div class="project-image">
        <img src="{{ site.baseurl }}/assets/img/projects/project_5/morphological_solution.jpg" alt="Concept Generation" class="img-fluid rounded"
        style="width: 80%; max-width: 700px; height: auto;">
        <p class="image-caption">Morphological matrix showing different solution combinations</p>
      </div>
    </div>
    
    <div class="process-step">
      <h3>5. Concept Evaluation</h3>
      <p>Applied a decision matrix with weighted quality metrics including:</p>
      <ul>
        <li>Technical feasibility</li>
        <li>Adaptability to various bolt patterns</li>
        <li>Cost-effectiveness</li>
        <li>Ease of deployment</li>
        <li>Safety considerations</li>
        <li>Maintainability</li>
      </ul>
      
      <!-- Add concept evaluation image -->
      <div class="project-image">
        <img src="{{ site.baseurl }}/assets/img/projects/project_5/comparison.jpg" alt="Concept Evaluation" class="img-fluid rounded"
        style="width: 80%; max-width: 600px; height: auto;">
        <p class="image-caption">Decision matrix comparing different automation concepts</p>
      </div>
    </div>
    
    <div class="process-step">
      <h3>6. Concept Solution</h3>
      <p>Selected and refined the optimal modular concept based on evaluation results, focusing on:</p>
      <ul>
        <li>Modular design approach for maximum adaptability</li>
        <li>Integration of sensing and feedback mechanisms</li>
        <li>User interface for system operation and monitoring</li>
        <li>Safety protocols for automated high-torque operations</li>
      </ul>
      
      <!-- Add solution selection image -->
      <div class="project-image">
        <img src="{{ site.baseurl }}/assets/img/projects/project_5/solution.png" alt="Final Concept" class="img-fluid rounded"
        style="width: 80%; max-width: 700px; height: auto;">
        <p class="image-caption">Concept solutions for the automated fastening system</p>
      </div>
    </div>
    
    <div class="process-step">
      <h3>7. Presentation & Documentation</h3>
      <p>Created comprehensive documentation and presented the final concept through:</p>
      <ul>
        <li>Technical documentation package</li>
        <li>Professional poster presentation</li>
        <li>Stakeholder briefing sessions</li>
        <li>Implementation roadmap</li>
      </ul>
      
      <!-- Add presentation image -->
      <div class="project-image">
        <img src="{{ site.baseurl }}/assets/img/projects/project_5/poster.png" alt="Project Presentation" class="img-fluid rounded">
        <p class="image-caption">Final poster presentation showcasing the automated fastening concept</p>
      </div>
    </div>
  </div>

  <div class="project-section">
    <h2>Results & Outcome</h2>
    
    <div class="results-grid">
      <div class="result-item">
        <h3>Concept Design</h3>
        <p>Delivered a detailed, scalable concept design for automated rotor house fastening and tensioning that addresses the core challenges identified.</p>
      </div>
      
      <div class="result-item">
        <h3>Modularity</h3>
        <p>The winning solution featured a modular architecture capable of accommodating various bolt sizes and patterns, future-proofing the system for evolving turbine designs.</p>
      </div>
      
      <div class="result-item">
        <h3>Stakeholder Feedback</h3>
        <p>Received positive feedback from project sponsors during the final presentation, validating the approach and solution.</p>
      </div>
      
      <div class="result-item">
        <h3>Future Impact</h3>
        <p>The project serves as a foundational concept for future automation efforts in offshore turbine maintenance, potentially reducing labor costs and improving reliability.</p>
      </div>
    </div>
    
    <!-- Add final results image -->
    <div class="project-image">
      <img src="{{ site.baseurl }}/assets/img/projects/project_5/team.jpg" alt="Project Outcome" class="img-fluid rounded">
      <p class="image-caption">Team behind the automation concept project</p>
    </div>
  </div>
  <div class="back-to-projects">
    <a href="{{ site.baseurl }}/projects/" class="btn" role="button">
      <i class="fas fa-arrow-left mr-2"></i>Back to All Projects
    </a>
  </div>
</div>