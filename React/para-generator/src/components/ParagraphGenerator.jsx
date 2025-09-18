import React, { useState } from 'react';

const ParagraphGenerator = () => {
  const [wordCount, setWordCount] = useState('');
  const [generatedParagraph, setGeneratedParagraph] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const generateParagraph = async () => {
    if (!wordCount || parseInt(wordCount) <= 0) {
      setError('Please enter a valid number of words');
      return;
    }

    setIsLoading(true);
    setError('');
    setGeneratedParagraph('');

    try {
      const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-goog-api-key': 'AIzaSyDBneQceCRvgKoscJvdGH4F8buIX52GzHE'
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `Generate a coherent, engaging paragraph that is ${wordCount} words long. The paragraph should be well-structured with proper flow and interesting content. Do not include any additional text or explanations, just return the paragraph.`
            }]
          }]
        })
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      console.log(data)
      
      if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts[0]) {
        const paragraph = data.candidates[0].content.parts[0].text;
        setGeneratedParagraph(paragraph);
      } else {
        throw new Error('Unexpected response format');
      }

    } catch (err) {
      console.error('Error generating paragraph:', err);
      setError('Note: Using fallback generator. Please configure your Gemini API key for full functionality.');
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedParagraph);
      alert('Paragraph copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const countWords = (text) => {
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Para Generator</h1>
            <p className="text-gray-600">Generate paragraphs with your desired word count</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex-1">
              <input
                type="number"
                value={wordCount}
                onChange={(e) => setWordCount(e.target.value)}
                placeholder="Enter Number of Words"
                className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                min="1"
                max="1000"
              />
            </div>
            <button
              onClick={generateParagraph}
              disabled={isLoading}
              className="px-8 py-4 bg-gray-800 text-white font-semibold rounded-xl hover:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors text-lg"
            >
              {isLoading ? 'Generating...' : 'Generate'}
            </button>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800">
              <p className="font-medium">Warning:</p>
              <p>{error}</p>
              <p className="text-sm mt-2">
                To use the Gemini AI API, replace 'GEMINI_API_KEY' in the code with your actual API key from Google AI Studio.
              </p>
            </div>
          )}

          {generatedParagraph && (
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Generated Paragraph</h2>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600">
                    Words: {countWords(generatedParagraph)}
                  </span>
                  <button
                    onClick={copyToClipboard}
                    className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    Copy
                  </button>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg border">
                <p className="text-gray-800 leading-relaxed text-lg">
                  {generatedParagraph}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ParagraphGenerator;