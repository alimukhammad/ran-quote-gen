import React, { useState, useEffect } from 'react';

const QuoteGenerator: React.FC = () => {
    const [quote, setQuote] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    const fetchQuote = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://api.quotable.io/random');
            const data = await response.json();
            setQuote(data.content);
        } catch (error) {
            console.error('Error fetching quote:', error);
            setQuote('Failed to fetch quote');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        <div className="quote-generator">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <blockquote>
                    <p>{quote}</p>
                </blockquote>
            )}
            <button onClick={fetchQuote}>Generate New Quote</button>
        </div>
    );
};

export default QuoteGenerator;