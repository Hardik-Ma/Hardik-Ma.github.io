---
layout: page
title: Master Thesis
permalink: /projects/project6/
---

<div class="project-container">
  <div class="project-header">
    <h1>Evaluation of Intrinsic Camera Calibration Accuracy: Reference Setup Verification and Methodology</h1>
    
  </div>

  <div class="project-section">
    <h2>Problem Statement</h2>
    <p>Accurate camera calibration is critical in computer vision, robotics, and 3D imaging applications. Traditional calibration methods often rely on reprojection error at close distances, which may not reflect the intrinsic parameters true performance in real-world settings. This thesis addresses the need for a robust evaluation methodology that reflects calibration accuracy at working distances.</p>
    
  </div>

  <div class="project-section">
    <h2>Tools & Skills Used</h2>
    
    <div class="tools-container">
      <div class="tools-col">
        <h3>Software & Equipment</h3>
        <ul class="tools-list">
          <li><span class="tool-name">OpenCV</span> - Camera calibration implementation</li>
          <li><span class="tool-name">MATLAB</span> - Data analysis and visualization</li>
          <li><span class="tool-name">Trioptics MTF Studio</span> - Optical performance testing</li>
          <li><span class="tool-name">Heidenhain MT 25 Encoder</span> - Precision position measurement</li>
          <li><span class="tool-name">Laser Range Finder</span> - Reference distance measurement</li>
          <li><span class="tool-name">Point Grey Camera</span> - Test camera for calibration</li>
        </ul>
      </div>
      
      <div class="tools-col">
        <h3>Technical Skills</h3>
        <ul class="skills-list">
          <li>Camera Calibration</li>
          <li>Optical Metrology</li>
          <li>Image Processing</li>
          <li>Python Scripting</li>
          <li>Mechanical Design</li>
          <li>Sensitivity Analysis</li>
          <li>System Integration</li>
          <li>Data Analysis</li>
        </ul>
      </div>
    </div>
    
  </div>

  <div class="project-section">
    <h2>Design & Engineering Process</h2>
    
    <div class="process-step">
      <h3>1. Reference Setup </h3>
      <p>The foundation of the methodology was a precisely engineered reference setup:</p>
      <ul>
        <li>A double-goniometer-based system for precise camera and target alignment</li>
        <li>Ensured sub-millimeter positioning accuracy with Heidenhain encoders and custom mechanical mounts</li>
        <li>A rigid mounting structures to eliminate vibration and displacement errors</li>
      </ul>
      
    </div>
    
    <div class="process-step">
      <h3>2. Novel Distance Measurement Technique</h3>
      <p>A key innovation in this thesis was the development of a CTF-based distance measurement method:</p>
      <ul>
        <li>Introduced a Contrast Transfer Function (CTF)-based method to compute camera-to-target distance</li>
        <li>Achieved a resolution of 0.01 mm and accuracy of ±0.1 mm over a range of 0 to 4 meters</li>
        <li>Implemented algorithms to extract focus metrics from test patterns</li>
      </ul>
      
    </div>
    
    <div class="process-step">
      <h3>3. Reference Target Chart</h3>
      <p>Precise calibration requires an equally precise target system:</p>
      <ul>
        <li>Created a high-accuracy ground-truth chart using a 5×5 grid of checkerboard targets on a 2×2 meter wall-mounted setup</li>
        <li>Implemented robust projection techniques using polar goniometer configuration</li>
        <li>Developed methods to verify target flatness and alignment</li>
      </ul>
      
    </div>
    
    <div class="process-step">
      <h3>4. Intrinsic Calibration & Analysis</h3>
      <p>The core calibration procedures involved:</p>
      <ul>
        <li>Performing calibration using planar calibration patterns</li>
        <li>Evaluating intrinsic parameters on both the image plane and object plane</li>
        <li>Analyzing re-projection errors and alignment accuracy</li>
        <li>Developing metrics to assess calibration quality beyond standard reprojection error on image plane</li>
      </ul>
      
    </div>
    
    <div class="process-step">
      <h3>5. Sensitivity & Robustness Validation</h3>
      <p>To ensure methodology reliability, extensive validation was performed:</p>
      <ul>
        <li>Compared CTF-based distance measurements with laser range finder</li>
        <li>Assessed the method's sensitivity to environmental changes and AOI (Area of Interest) variation</li>
        <li>Conducted repeated measurements to establish statistical confidence intervals</li>
      </ul>
      
    </div>
  </div>

  <div class="project-section">
    <h2>Results & Outcome</h2>
    
    <div class="results-grid">
      <div class="result-item">
        <h3>Methodology Development</h3>
        <p>Developed a repeatable, precise calibration evaluation method at real-world distances, bridging the gap between laboratory calibration and practical applications.</p>
      </div>
      
      <div class="result-item">
        <h3>Measurement Accuracy</h3>
        <p>CTF-based technique demonstrated strong correlation with reference measurements, with offsets within ±0.2 mm over the full measurement range.</p>
      </div>
      
      <div class="result-item">
        <h3>Critical Factors</h3>
        <p>Identified key factors affecting calibration accuracy, including sensor alignment, target orientation and flatness, and environmental stability (e.g., humidity, lighting).</p>
      </div>
    </div>
    
  </div>

  <div class="project-section">
    <h2>Key Takeaways</h2>
    <div class="takeaways-container">
      <div class="takeaway-item">
        <h3>Context-Specific Evaluation</h3>
        <p>Real-world calibration accuracy requires context-specific evaluation, not just image plane errors. The distance at which calibration is performed significantly impacts practical performance.</p>
      </div>
      
      <div class="takeaway-item">
        <h3>CTF-Based Alternative</h3>
        <p>CTF-based distance measurement is a viable, high-precision alternative to laser-based methods.</p>
      </div>
      
      <div class="takeaway-item">
        <h3>Future Applications</h3>
        <p>The reference setup serves as a testbed for future calibration methods in machine vision and robotics, providing a foundation for more accurate 3D reconstruction and spatial measurements.</p>
      </div>
    </div>
    
  </div>
  <div class="back-to-projects">
    <a href="{{ site.baseurl }}/projects/" class="btn" role="button">
      <i class="fas fa-arrow-left mr-2"></i>Back to All Projects
    </a>
  </div>
</div>