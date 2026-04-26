# Muse_Type

A typing game that transforms your favorite song lyrics into an engaging typing challenge.

## Overview

Muse_Type combines the satisfaction of typing practice with the joy of music. Instead of generic sentences or random words, you type along to actual song lyrics from popular tracks. This approach makes typing practice more enjoyable while naturally improving your speed and accuracy through familiar, rhythmic patterns.

## How It Works

The application presents song lyrics in real-time as you type. Each correctly typed character advances the display, while mistakes are gently highlighted for correction. The interface provides immediate feedback through visual cues, helping you develop muscle memory for common letter combinations and phrases found in the lyrics.

## Technical Implementation

### Backend
Built with Node.js and Express, the backend handles:
- Fetching and processing song lyrics from external sources
- Serving lyric data through a RESTful API
- Managing CORS policies for frontend integration
- Environment-based configuration for different deployment scenarios

### Frontend
Developed with React and Vite, featuring:
- Responsive design that adapts to various screen sizes
- Real-time character-by-character input validation
- Visual feedback systems for correct and incorrect inputs
- Ambient visual enhancements that complement the typing experience
- Optimized performance through modern React practices

## Getting Started

To run Muse_Type locally:

1. **Backend Setup**
   - Navigate to the Backend directory
   - Install dependencies: `npm install`
   - Configure environment variables as needed
   - Start the server: `npm run dev`

2. **Frontend Setup**
   - Navigate to the Frontend directory
   - Install dependencies: `npm install`
   - Configure environment variables (particularly the backend URL)
   - Start the development server: `npm run dev`

3. **Data Preparation**
   - Ensure the AllSongs.json file exists in the Backend/dataExtraction directory
   - Run the song extraction script if needed to populate the database

## Features

- **Music-Based Learning**: Type actual song lyrics instead of generic text
- **Immediate Feedback**: Visual indicators show typing accuracy in real-time
- **Adaptive Difficulty**: Different songs offer varying linguistic patterns and complexities
- **Engaging Interface**: Subtle animations and visual elements maintain focus without distraction
- **Cross-Platform**: Works in any modern web browser

## Design Philosophy

Muse_Type was created with the belief that skill development works best when it doesn't feel like work. By anchoring typing practice in music—something people naturally enjoy—the application leverages intrinsic motivation to encourage consistent practice. The rhythmic nature of lyrics helps develop a natural typing flow, while the familiarity of popular songs reduces the cognitive load typically associated with learning new material.

The visual design emphasizes calm focus, using gentle animations and a carefully curated color palette that reduces eye strain during extended sessions. Feedback mechanisms are informative rather than punitive, encouraging continued engagement through positive reinforcement.

## Future Enhancements

Planned improvements include:
- User accounts to track progress over time
- Difficulty scaling based on historical performance
- Expanded song library with diverse genres and languages
- Customizable interface themes
- Advanced statistics and analytics
- Social features for friendly competition

## Contributing

While this is currently a personal project, suggestions and feedback are always welcome. Feel free to open issues or submit pull requests if you'd like to contribute to the development of Muse_Type.

## Acknowledgments

Built with modern web technologies and inspired by the intersection of music cognition and motor skill development.