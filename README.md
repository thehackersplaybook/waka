# Waka: Detect AI-Generated Text 🐲

> > Disclaimer 🚦: This project is currently in an experimental stage, use at your own discretion. Please do not use Waka for mission-critical applications yet.

## Overview

**Waka** is an API service designed to detect AI-generated text using Gen AI models by Open AI and Anthropic. Whether you're verifying content authenticity, combating misinformation, or simply curious about the origins of text, Waka provides a reliable and efficient solution for distinguishing between human-written and AI-generated content.

---

## Features

- ✨ **Scoring & Reasoning**: Waka generates a 'ai generated score' and a natural language reason to justify the score. This design decision was taken in favour of our XAI (Explainable AI) initiatives.
- ⏳ **Fast Responses**: Optimized for low-latency detection, making it suitable for real-time applications. The bottleneck is the LLM, so you can switch to more lightweight models like GPT 4o Mini for quicker responses.
- 🛠️ **Scalable**: Supports high-volume requests, perfect for enterprise-level integrations. Since you use your own key, this depends on your LLM Provider Plan.
- ⚙️ **Customizable Thresholds**: Tailor detection sensitivity to your specific use case. (WIP)
- 🌍 **Multi-Language Support**: Works with text in multiple languages to ensure wide applicability. Most LLMs include training data written in languages other than English, so this feature comes out of the box.
- 🔧 **Developer-Friendly**: Intuitive API with comprehensive documentation and easy-to-use endpoints. There's a Postman Collection provided below. In future, we plan to add a detailed documentation and setup page to make life easier for adopters.

---

## Use Cases

1. 🕵️‍♂️ **Content Moderation**: Identify AI-generated spam or synthetic content in forums, social media platforms, or comment sections.
2. 🎓 **Academic Integrity**: Detect AI-written assignments or research papers.
3. 🔧 **Fact-Checking**: Verify the authenticity of news articles or user-generated content.
4. 🤖 **AI Research**: Analyze and benchmark the performance of AI-generated text models.
5. 🔎 **Personal Use**: Satisfy curiosity about the authenticity of a piece of text.

---

## Setup Instructions

### Prerequisites

Ensure you have the following installed on your system:

- 💻 **Node.js**: [Download and install Node.js](https://nodejs.org/)
- 🔧 **npm**: Comes bundled with Node.js

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ythehackersplaybook/waka.git
   cd waka
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Setup Postman Collection

Download the Postman Collection `(thp-waka.collection.json)` and play with the APIs yourself. (TODO: add this)

### Running the Service

1. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following keys:
     ```env
     OPENAI_API_KEY=your-openai-key
     ANTHROPIC_API_KEY=your-anthropic-key
     ```
2. Start the development server on `http://localhost:3000`:
   ```bash
   npm start
   ```
3. Build the project:
   ```bash
   npm run build
   ```
4. Run tests:
   ```bash
   npm run test
   ```

---

## Roadmap

- 🌍 Expand multi-language support to cover all major global languages.
- ⚙️ Add batch processing endpoints for analyzing large datasets.
- 🕌 Implement a browser-based dashboard for non-developers.
- 🔍 Introduce AI attribution for identifying the specific AI model used to generate text.

---

## Contributing

We welcome contributions! Please follow these steps:

1. 🔄 Fork the repository.
2. 🕳️ Create a new branch for your feature or bug fix.
3. 🔗 Submit a pull request with a detailed description of your changes.

---

## Support

For questions or support, reach out to us at ✉️ `thehackersplaybook0@gmail.com` or visit our documentation site.

---

## License

🔒 Waka is licensed under the MIT License. See LICENSE for more information.

---

Unmask the truth, one text at a time with **Waka**! 🐲
