# Waka: Unmasking AI-Generated Text with Precision and Speed 🐲

## Overview

**Waka** is an API service designed to detect AI-generated text with exceptional precision and speed. Whether you're verifying content authenticity, combating misinformation, or simply curious about the origins of text, Waka provides a reliable and efficient solution for distinguishing between human-written and AI-generated content.

---

## Features

- ✨ **High Accuracy**: Waka employs state-of-the-art Gen AI models from OpenAI and Anthropic to differentiate AI-generated text from human-authored content.
- ⏳ **Fast Responses**: Optimized for low-latency detection, making it suitable for real-time applications.
- 🛠️ **Scalable**: Supports high-volume requests, perfect for enterprise-level integrations.
- ⚙️ **Customizable Thresholds**: Tailor detection sensitivity to your specific use case.
- 🌍 **Multi-Language Support**: Works with text in multiple languages to ensure wide applicability.
- 🔧 **Developer-Friendly**: Intuitive API with comprehensive documentation and easy-to-use endpoints.

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
     OPENAI_KEY=your-openai-key
     ANTHROPIC_KEY=your-anthropic-key
     ```
2. Start the development server:
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

For questions or support, reach out to us at ✉️ support@waka-api.com or visit our documentation site.

---

## License

🔒 Waka is licensed under the MIT License. See LICENSE for more information.

---

Unmask the truth, one text at a time with **Waka**! 🐲
