---
layout: page
title: ADMM Project
permalink: /projects/project4/
---

<div class="project-container">
  <div class="project-header">
    <h1>Music Visualization Robot: Transforming Sound into Art</h1>
    
    <!-- Hero Image -->
    <div class="project-hero-image">
      <img src="{{ site.baseurl }}/assets/img/projects/project_4/final_model.jpg" 
           alt="Music Visualization Robot" 
           class="img-fluid rounded" 
           style="width: 80%; max-width: 600px; height: auto;">
      <p class="image-caption">The completed XY plotter robot translating music into visual art</p>
    </div>
  </div>

  <div class="project-section">
    <h2>Project Overview</h2>
    <div class="project-overview">
      <div class="overview-item">
        <h3>Course</h3>
        <p>Applied Design Methodology in Mechatronics (ADMM 2023)</p>
      </div>
      <div class="overview-item">
        <h3>Duration</h3>
        <p>One Semester</p>
      </div>
      <div class="overview-item">
        <h3>Team Size</h3>
        <p>8 Engineers</p>
      </div>
    </div>
  </div>

  <div class="project-section">
    <h2>Problem Statement</h2>
    <p class="problem-statement">How might we design a robot that interprets music and transforms it into unique, expressive visual art—automatically and in real time?</p>
    
    <!-- Add a conceptual image -->
    <div class="project-image">
      <img src="{{ site.baseurl }}/assets/img/projects/project_4/concept.png" alt="Music to Art Concept" class="img-fluid rounded"
           style="width: 80%; max-width: 600px; height: auto;">
      <p class="image-caption">Conceptual visualization of translating music frequencies into artistic patterns (AI Generated)</p>
    </div>
  </div>

  <div class="project-section">
    <h2>Team Members</h2>
    <div class="team-container">
      <div class="team-member">Sherif Elgohary</div>
      <div class="team-member">Ranjan Mahesh</div>
      <div class="team-member">Parikshit Mankuli</div>
      <div class="team-member">Rebeca Sebastian</div>
      <div class="team-member">José Mendes </div>
      <div class="team-member">Hafiz Abdul Rahman</div>
      <div class="team-member">Harshit Shivakumar</div>
      <div class="team-member">Tom Liebing (Supervisor)</div>
    </div>
  </div>

  <div class="project-section">
    <h2>My Role</h2>
    <div class="role-container">
      <div class="role-item">
        <h3>Project Manager</h3>
        <ul>
          <li>Led sprint planning and Agile methodology implementation</li>
          <li>Coordinated cross-functional team activities and milestone tracking</li>
          <li>Managed project timeline and resource allocation</li>
        </ul>
      </div>
      
      <div class="role-item">
        <h3>Algorithm Developer</h3>
        <ul>
          <li>Designed music analysis algorithms using Python and FFT</li>
          <li>Developed three unique music-to-motion translation algorithms</li>
          <li>Implemented signal processing techniques for real-time interpretation</li>
        </ul>
      </div>

      <div class="role-item">
        <h3>Team Coordinator</h3>
        <ul>
          <li>Facilitated communication between mechanical, electrical, and software teams</li>
          <li>Ensured integration of subsystems aligned with project requirements</li>
          <li>Led design reviews and technical presentations</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="project-section">
    <h2>Tools & Skills Used</h2>
    
    <div class="tools-container">
      <div class="tools-col">
        <h3>Project Management</h3>
        <ul class="tools-list">
          <li><span class="tool-name">Jira</span> - Task tracking and sprint planning</li>
          <li><span class="tool-name">Miro</span> - Collaborative design and brainstorming</li>
          <li><span class="tool-name">Agile Methodology</span> - Iterative development approach</li>
          <li><span class="tool-name">V-model (VDI 2206)</span> - Development framework</li>
        </ul>
      </div>
      
      <div class="tools-col">
        <h3>Technical Tools</h3>
        <ul class="tools-list">
          <li><span class="tool-name">Python</span> - FFT and signal processing</li>
          <li><span class="tool-name">CAD Software</span> - Mechanical design and simulation</li>
          <li><span class="tool-name">Hardware</span> - Stepper motors, Arduino, paint mechanisms</li>
        </ul>
      </div>
    </div>
    
    <!-- Add software/tools image -->
    <div class="project-image">
      <img src="{{ site.baseurl }}/assets/img/projects/project_4/gant_chart.png" alt="Development Tools" 
        class="img-fluid rounded" 
        style="width: 80%; max-width: 600px; height: auto;">
      <p class="image-caption">Project Gant Chart</p>
    </div>

  <div class="project-section">
    <h2>Design & Engineering Process</h2>
    <p>We followed the VDI 2206 V-model methodology to systematically develop our music visualization robot:</p>
    
    <div class="process-step">
      <h3>1. Requirement Definition</h3>
      <p>Established key system requirements:</p>
      <ul>
        <li>Safety protocols for human-robot interaction</li>
        <li>User-friendly interface for operation</li>
        <li>Artistic expressiveness in visual output</li>
        <li>Cost-effective design within budget constraints</li>
        <li>Real-time music processing capability</li>
      </ul>
      <div class="project-image">
        <img src="{{ site.baseurl }}/assets/img/projects/project_4/requirement_list.png" alt="Requirement List" class="img-fluid rounded"
          style="width: 80%; max-width: 600px; height: auto;">
        <p class="image-caption">Requirements list</p>
      </div>
    </div>

    <div class="process-step">
      <h3>2. Black Box Modeling</h3>
      <p>Created functional abstractions to define system behavior, mapping inputs (music signals) to outputs (robotic movements and painting patterns).</p>
      
      <!-- Add black box model image -->
      <div class="project-image">
        <img src="{{ site.baseurl }}/assets/img/projects/project_4/black_box.png" alt="Black Box Model" class="img-fluid rounded"
          style="width: 80%; max-width: 600px; height: auto;">
        <p class="image-caption">Black box modeling of system inputs and outputs</p>
      </div>
    </div>
    
    <div class="process-step">
      <h3>3. Functional Decomposition</h3>
      <p>Broke down the system into core functional subsystems:</p>
      <ul>
        <li>Music Signal Acquisition and Processing</li>
        <li>Signal-to-Motion Translation Algorithms</li>
        <li>XY Motion Control System</li>
        <li>Painting Mechanism and Tool Management</li>
        <li>User Interface and Control Panel</li>
      </ul>
            <!-- Add functional diagram image -->
      <div class="project-image">
        <img src="{{ site.baseurl }}/assets/img/projects/project_4/functional_decomposition.jpg" alt="Black Box Model" class="img-fluid rounded"
          style="width: 80%; max-width: 600px; height: auto;">
        <p class="image-caption">Functional Decomposition Diagram</p>
      </div>
    </div>
    
    <div class="process-step">
      <h3>4. Concept Generation</h3>
      <p>Using structured brainstorming methods, we explored multiple design approaches before selecting the design we wanted to pursue. We used two different
      techniques: one known as the 6-3-5 rule and another called Synectics. PS: Ours is called 4-2-5 since we adapted the original methods to our team's needs.</p>
      
      <!-- Add concept generation image -->
      <div class="project-image-group">
        <div class="project-image">
          <img src="{{ site.baseurl }}/assets/img/projects/project_4/6_3_5.png" alt="Concept Generation 1" class="img-fluid rounded">
          <p class="image-caption">6-3-5 Brainstorming Session</p>
        </div>
        <div class="project-image">
          <img src="{{ site.baseurl }}/assets/img/projects/project_4/synetic.png" alt="Concept Generation 2" class="img-fluid rounded">
          <p class="image-caption">Synectics Method</p>
        </div>
      </div>
    </div>
    
    <div class="process-step">
      <h3>5. System Design & Manufacturing</h3>
      <p>Finalized a 900×900 mm high-accuracy XY plotter design with:</p>
      <ul>
        <li>Precision stepper motors and belt drive system</li>
        <li>Custom-designed tool holder for multiple painting implements</li>
        <li>Modular frame construction for stability and portability</li>
        <li>Integrated electronics and control system</li>
      </ul>
      
      <!-- Add system design image -->
      <div class="project-image">
        <img src="{{ site.baseurl }}/assets/img/projects/project_4/3d_model.png" alt="System Design" class="img-fluid rounded">
        <p class="image-caption">CAD model and physical assembly of the XY plotter system</p>
      </div>
    </div>
    
    <div class="process-step">
      <h3>6. Algorithm Development</h3>
      <p>Created three distinct music-to-motion algorithms, each offering unique artistic interpretations:</p>
      
      <div class="algorithms-container">
        <div class="algorithm-item">
          <h4>Firework Algorithm</h4>
          <p>Colors selected by note frequency, stroke length determined by amplitude. Creates explosive, radial patterns that respond dynamically to music intensity.</p>
        </div>
        
        <div class="algorithm-item">
          <h4>Flower Bouquet Algorithm</h4>
          <p>Generates radial stroke patterns with variations based on octave recognition. Produces organic, flowing forms that evolve with the musical composition.</p>
        </div>
        
        <div class="algorithm-item">
          <h4>Shapes Algorithm</h4>
          <p>Creates geometric patterns based on dominant frequencies in the music. Responds to rhythm and beat patterns with corresponding visual elements.</p>
        </div>
      </div>
      
      <!-- Add algorithm visualization image -->
      <div class="project-image">
        <img src="{{ site.baseurl }}/assets/img/projects/project_4/algorithms.png" alt="Algorithm Visualization" class="img-fluid rounded"
            style ="width: 80%; max-width: 600px; height: auto;">
        <p class="image-caption">Visual outputs from the three different algorithms processing different music sample</p>
      </div>
    </div>
    
    <div class="process-step">
      <h3>7. Testing & Verification</h3>
      <p>Conducted comprehensive testing to validate system performance:</p>
      <ul>
        <li>Movement precision tests: achieved ±0.5 cm accuracy</li>
        <li>Algorithm fidelity testing: confirmed accurate music interpretation</li>
        <li>Painting quality assessment: optimized tool pressure and movement speed</li>
        <li>User experience testing: refined interface and operation workflow</li>
      </ul>
      
      <!-- Add testing image -->
      <div class="project-image">
        <img src="{{ site.baseurl }}/assets/img/projects/project_4/test_run.jpg" alt="Testing Phase" class="img-fluid rounded"
        style ="width: 80%; max-width: 600px; height: auto;">
        <p class="image-caption">Testing and calibration of the robot</p>
      </div>
    </div>
    
    <div class="process-step">
      <h3>8. Risk Assessment & Final Presentation</h3>
      <p>Completed safety review, documentation, and prepared for the live demonstration:</p>
      <ul>
        <li>Identified and mitigated potential failure modes</li>
        <li>Created user operation manual and safety protocols</li>
        <li>Prepared demonstration script and backup plans</li>
        <li>Organized live audience participation elements</li>
      </ul>
    </div>
  </div>

  <div class="project-section">
    <h2>Results & Outcome</h2>
    
    <div class="results-grid">
      <div class="result-item">
        <h3>Live Demo Success</h3>
        <p>Successfully performed in front of an audience, converting real-time music into paintings with three distinct algorithmic styles.</p>
      </div>
      
      <div class="result-item">
        <h3>Technical Achievement</h3>
        <p>Achieved high positional accuracy (±0.5 cm) and responsive real-time music processing with minimal latency.</p>
      </div>
      
      <div class="result-item">
        <h3>Artistic Innovation</h3>
        <p>Created a modular system supporting multiple painting tools (brush, marker, pen) with unique artistic expressions for each algorithm.</p>
      </div>
      
      <div class="result-item">
        <h3>User Engagement</h3>
        <p>Received enthusiastic feedback on the emotional connection between the music input and visual output.</p>
      </div>
    </div>
    
    <!-- Add final results image -->
    <div class="project-image">
      <img src="{{ site.baseurl }}/assets/img/projects/project_4/painting.jpg" alt="Final Artwork" class="img-fluid rounded"
      style="width: 80%; max-width: 700px; height: auto;">
      <p class="image-caption">Completed artwork created during the live demonstration</p>
    </div>
  </div>

  <div class="project-section">
    <h2>Final Thoughts</h2>
    <div class="final-thoughts">
      <p>This project brought together the rigor of engineering with the expressiveness of art. Leading such a cross-disciplinary team and watching an abstract idea come alive through sound and paint was a deeply rewarding experience.</p>
      
      <p>The Music Visualization Robot demonstrated how technical precision and artistic creativity can work together to create something truly innovative. The project not only fulfilled its technical requirements but also created an emotional connection with its audience—revealing new possibilities for human-machine artistic collaboration.</p>
    </div>
    
    <!-- Add team photo -->
    <div class="project-image">
      <img src="{{ site.baseurl }}/assets/img/projects/project_4/team.jpg" alt="Project Team" class="img-fluid rounded">
      <p class="image-caption">The ADMM project team with the completed music visualization robot</p>
    </div>
  </div>

  <div class="back-to-projects">
    <a href="{{ site.baseurl }}/projects/" class="btn" role="button">
      <i class="fas fa-arrow-left mr-2"></i>Back to All Projects
    </a>
  </div>
  
</div>