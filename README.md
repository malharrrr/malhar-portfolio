# Malhar's Terminal Portfolio

An interactive, web-based terminal portfolio designed to showcase projects, skills, and experience through a command-line interface. Built with TypeScript and customized for seamless deployment.

## 💡 Inspiration
This project is heavily inspired by the webshell repository created by [nasan016](https://github.com/nasan016/webshell)

## 🚀 Features
* **Interactive CLI Interface**: Users can type commands to navigate your portfolio, view projects, and access your contact information.
* **TypeScript Integrated**: Type-safe logic using `main.ts` and `terminal.ts` ensures robust code compilation.
* **Resume Access**: Easily serve your professional resume (`resume.pdf`) directly from the terminal interface.
* **Vercel Ready**: Pre-configured with `vercel.json` for instant, seamless deployment to Vercel.

## 📁 Project Structure
```text
├── .gitignore             # Standard Git ignore configurations
├── index.html             # The main HTML entry point for the web terminal
├── package.json           # Node.js project metadata and script commands
├── package-lock.json      # Dependency lockfile
├── resume.pdf             # Static resume document
├── tsconfig.json          # TypeScript compiler configuration
├── vercel.json            # Deployment configuration for Vercel
└── src/                   # Source code directory
    ├── data.ts / .js      # Contains the portfolio data (projects, bio, links)
    ├── main.ts / .js      # Core application initialization and DOM management
    ├── terminal.ts / .js  # Terminal logic, command parsing, and output rendering
    └── style.css          # Styling for the terminal interface (colors, fonts, layout)