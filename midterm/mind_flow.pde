/*
  @author Gururaj Shriram
  The Particle and Particle System Classes are from the Nature of Code 
  The MindSet Processing API is from http://jorgecardoso.eu/processing/MindSetProcessing/
  The Slider is from the G4P GUI Library (http://www.lagers.org.uk/g4p/)
*/

import processing.serial.*;
import pt.citar.diablu.processing.mindset.*;
import g4p_controls.*;

ParticleSystem ps;
MindSet mindSet;
GSlider meditationSlider;
PImage riverImg;
float ellipseWidthHeight = 1;
int meditationLevel = 100;
int delayInterval = 6;
int currentFrame = 0;
boolean isPaused = false;

class Particle {
  PVector position;
  PVector velocity;
  
  Particle(PVector pos, PVector vel) {
     position = pos;
     velocity = vel;
  }
  void run() {
    update();
    display();
  }

  void update() {
    position.add(velocity);
  }

  void display() {
    strokeWeight(5);
    // Calm state = blue, anxious state = red, with a blend of blue and red in each
    stroke(map(100 - meditationLevel, 0, 100, 0, 255), 0, map(meditationLevel, 0, 100, 0, 255));
    fill(map(100 - meditationLevel, 0, 100, 0, 255), 0, map(meditationLevel, 0, 100, 0, 255));
    ellipse(position.x, position.y, ellipseWidthHeight, ellipseWidthHeight);
  }

  boolean isDead() {
    // Dead if the particle goes out of bounds of the sketch
    if (position.x < 0 || position.x > width || position.y > height || position.y < 0) {
      return true;
    } else {
      return false;
    }
  }
}

class ParticleSystem {
  ArrayList<Particle> particles;

  ParticleSystem() {
    particles = new ArrayList<Particle>();
  }

  void addParticle(Particle p) {
    particles.add(p); 
  }

  void run() {
    for (int i = particles.size()-1; i >= 0; i--) {
      Particle p = particles.get(i);
      p.run();
      if (p.isDead()) {
        particles.remove(i);
      }
    }
  }
}

public void handleSliderEvents(GSlider slider, GEvent event) {
     meditationLevel = slider.getValueI();
}

void setupMeditationSlider() {
  String[] tickLabels = new String[101];
  
  // Make a tick from 0 to 100
  for (int i = 0; i < tickLabels.length; i++) {
     tickLabels[i] = String.valueOf(i); 
  }
  
  meditationSlider = new GSlider(this, 0, 0, 200, 200, 20);
  meditationSlider.setNumberFormat(G4P.INTEGER, 2);
  meditationSlider.setEnabled(true);
  meditationSlider.setLimits(100, 0, 100);
  meditationSlider.setShowValue(false);
  meditationSlider.setShowTicks(false);
  meditationSlider.setTickLabels(tickLabels);
  meditationSlider.addEventHandler(this, "handleSliderEvents"); 
}

public void meditationEvent(int medLevel) {
  println("Meditation Level: " + medLevel);
  meditationLevel = medLevel;
  meditationSlider.setValue(meditationLevel);
}

public void attentionEvent(int attLevel) {}
public void poorSignalEvent(int sig) {}
public void blinkEvent(int blink) {}
public void eegEvent(
  int delta, 
  int theta, 
  int low_alpha, 
  int high_alpha, 
  int low_beta, 
  int high_beta, 
  int low_gamma, 
  int mid_gamma) {}
  
public void rawEvent(int[] raw) {}

void mouseClicked() { 
   for (Particle p : ps.particles) {
     if (dist(p.position.x, p.position.y, mouseX, mouseY) < 15) {
         p.velocity = PVector.random2D().mult(10);
     }
   }
}

void mouseDragged() {
  for (Particle p : ps.particles) {
     if (dist(p.position.x, p.position.y, mouseX, mouseY) < 15) {
         p.velocity = PVector.random2D().mult(10);
     }
   }
}

void keyPressed() {
    // (Un)pause the sketch
    if (key == 'p' || key == 'P' || keyCode == 80 || keyCode == 112) {
       isPaused = !isPaused;
       if (isPaused) {
          noLoop(); 
       } else {
         loop();
       }
    }
    
    // Reset the sketch
    if (key == 'r' || key == 'R' || keyCode == 82 || keyCode == 114) {
       ps = new ParticleSystem(); 
    }
}

void settings() {
  riverImg = loadImage("./assets/river.jpg");
  size(int(riverImg.width), int(riverImg.height));
}

void setup() {
  ps = new ParticleSystem();
  setupMeditationSlider();
  
  try {
     mindSet = new MindSet(this, "/dev/cu.MindWaveMobile-DevA-1");
  } catch(Exception e) {
     println("MindSet port is busy. Try another one.");
  }
}

void draw() {
   background(0);
   image(riverImg, 0, 0);
   
   if (currentFrame == 0) {
     for (int i = 480; i <= 820; i+=5) {
         ps.addParticle(new Particle(new PVector(i, 0, 0), new PVector(-1, 0.75)));
     }
     
     for (int i = 820; i <= 1050; i+=3) {
       int j = int((i - 820) * 1.2);
       
       ps.addParticle(new Particle(new PVector(i, j, 0), new PVector(-1, 0.75)));   
     }
   }

   ps.run();
   currentFrame = currentFrame + 1 < delayInterval ? currentFrame + 1 : 0;
}

void exit() {
  if (mindSet != null)
     mindSet.quit();
     
   super.exit();
}