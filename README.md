#  PPT-Bot: AI-Powered PowerPoint Generator

A Flask-based web application that uses a Large Language Model (LLM) via [OpenRouter API](https://openrouter.ai) to automatically generate structured PowerPoint presentations from user-given topics.

##  Features

- 📝 Enter any topic and generate a complete presentation
- 🧠 Uses the `mistralai/mistral-7b-instruct` model via OpenRouter API
- 📑 Slides are generated with 2–3 bullet points per slide
- 🎨 Option to support templates or predefined layouts
- 💾 Automatically saves the generated `.pptx` file for download

---

##  Tech Stack

| Layer           | Tech Used                       |
|----------------|----------------------------------|
| Backend        | Python, Flask                    |
| LLM API        | Mistral-7B Instruct via OpenRouter |
| Presentation   | python-pptx                      |
| Frontend       | HTML, CSS, JavaScript            |
| Deployment     | Localhost (development mode)     |

---
## Setup Instructions

1. **Clone this repo**
   ```bash
   git clone https://github.com/jahnavi2729-hub/ppt-bot.git
   cd ppt-bot
   ```

2. **Create and activate a virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # or venv\Scripts\activate on Windows
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Add your OpenRouter API Key**
   Create a `.env` file and add:
   ```env
   OPENROUTER_API_KEY=your_openrouter_key_here
   ```

5. **Run the Flask app**
   ```bash
   python chatbot.py
   ```

6. **Open in browser**
   Navigate to `http://127.0.0.1:5000`

---



##  LLM Details

- **Model:** `mistralai/mistral-7b-instruct`
- **Hosted via:** [OpenRouter API](https://openrouter.ai)
- **Prompting strategy:** Structured prompts asking for topic-wise bullet points to format into slides.

---

## Future Improvements

- Add custom template support for slides
- Add user authentication
- Deploy on Render / Vercel / Railway
- Add download history & slide previews

---

##  License

MIT License

---

##  Author

**Jahnavi** — [GitHub](https://github.com/jahnavi2729-hub)
