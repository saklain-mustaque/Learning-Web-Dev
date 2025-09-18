# Learning Web Dev - React Projects

This repository contains a collection of React applications built while learning React.js development.

## 🚀 Live Demos

Visit the main page: [https://saklain-mustaque.github.io/Learning-Web-Dev/](https://saklain-mustaque.github.io/Learning-Web-Dev/)

### Individual Apps:
- [Background Changer](https://saklain-mustaque.github.io/Learning-Web-Dev/React/background-changer/) - Interactive background color changer
- [GitHub Card](https://saklain-mustaque.github.io/Learning-Web-Dev/React/github-card/) - GitHub profile card component
- [Paragraph Generator](https://saklain-mustaque.github.io/Learning-Web-Dev/React/para-generator/) - Paragraph generator based on given word counts(Text Generated using AI)
- [Profile Card Component](https://saklain-mustaque.github.io/Learning-Web-Dev/React/Profile-Card-Component/) - Elegant profile card

## 📁 Project Structure

```
Learning-Web-Dev/
├── .github/
│   └── workflows/
│       └── deploy-react-apps.yml    # GitHub Actions workflow
├── React/
│   ├── background-changer/          # Background color changer app
│   ├── github-card/                 # GitHub profile card
│   ├── para-generator/              # Paragraph generator
│   └── Profile-Card-Component/      # Profile card component
├── deploy-all.sh                    # Linux/Mac deployment script
├── deploy-all.bat                   # Windows deployment script
└── README.md
```

## 🛠️ Technologies Used

- **React** - Frontend library
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework (some projects)
- **GitHub Pages** - Hosting platform
- **GitHub Actions** - CI/CD pipeline

## 🚀 Deployment

### Automatic Deployment (Recommended)

The repository is configured with GitHub Actions for automatic deployment. Any push to the `main` branch will:

1. Build all React applications
2. Deploy them to GitHub Pages
3. Create a main index page with links to all apps

### Manual Deployment

#### Option 1: Deploy All Apps (Windows)
```bash
./deploy-all.bat
```

#### Option 2: Deploy All Apps (Linux/Mac)
```bash
chmod +x deploy-all.sh
./deploy-all.sh
```

#### Option 3: Deploy Individual Apps
Navigate to any app directory and run:
```bash
cd React/[app-name]
npm install
npm run deploy
```

## 🔧 Development

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Running Locally

1. Navigate to any app directory:
```bash
cd React/[app-name]
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## ⚙️ Configuration

Each app is configured with:

- **Base URL**: Set in `vite.config.js` for proper GitHub Pages routing
- **Homepage**: Set in `package.json` for deployment
- **gh-pages**: Package for deploying to GitHub Pages

### Vite Configuration Example:
```javascript
export default defineConfig({
  base: "/Learning-Web-Dev/React/[app-name]/",
  plugins: [react()],
})
```

## 🐛 Troubleshooting

### Common Issues and Solutions:

1. **404 Error on GitHub Pages**
   - Ensure the `base` URL in `vite.config.js` matches your repository structure
   - Check that the `homepage` field in `package.json` is correct

2. **Build Failures**
   - Run `npm install` to ensure all dependencies are installed
   - Check for TypeScript or ESLint errors
   - Verify that all imports are correct

3. **Assets Not Loading**
   - Confirm that the base URL configuration is correct
   - Check that assets are placed in the `public` directory or imported properly

4. **Deployment Script Errors**
   - Ensure you have push permissions to the repository
   - Check that the `gh-pages` branch exists and is set up correctly
   - Verify that GitHub Pages is enabled in repository settings

## 📝 App Descriptions

### Background Changer
A simple React app that allows users to change the background color by clicking buttons. Demonstrates state management and event handling.

### GitHub Card
A component that displays GitHub user information in a card format, styled with Tailwind CSS. Shows API integration and responsive design.

### Paragraph Generator
A utility app that generates Lorem ipsum text paragraphs. Useful for testing layouts and demonstrates form handling.

### Profile Card Component
An elegant profile card component with modern styling and animations. Showcases CSS-in-JS and component composition.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-app`)
3. Commit your changes (`git commit -am 'Add new app'`)
4. Push to the branch (`git push origin feature/new-app`)
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the individual app directories for specific license information.

## 👨‍💻 Author

**Saklain Mustaque**
- GitHub: [@saklain-mustaque](https://github.com/saklain-mustaque)

---

⭐ Star this repository if you find it helpful!
