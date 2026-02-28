tailwind.config = {
    theme: {
        extend: {
            keyframes: {
                'fade-in': {
                    '0%': { opacity: '0', transform: 'translateY(-5px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            },
            animation: {
                'fade-in': 'fade-in 0.3s ease-out forwards',
            },
            colors: {
                theme: {
                    bg: 'var(--color-bg)',
                    card: 'var(--color-card)',
                    border: 'var(--color-border)',
                    text: 'var(--color-text)',
                    heading: 'var(--color-heading)',
                    body: 'var(--color-body)',
                    muted: 'var(--color-muted)',
                    primary: 'var(--color-primary)',
                    accent: 'var(--color-accent)',
                    'header-bg': 'var(--color-header-bg)',
                    'header-text': 'var(--color-header-text)',
                    'pill-bg': 'var(--color-pill-bg)',
                    'pill-text': 'var(--color-pill-text)'
                }
            },
            fontFamily: {
                // Terminal font for readability
                sans:['VT323', 'monospace'], 
                // 8-bit font for headers
                arcade:['"Press Start 2P"', 'cursive'], 
            }
        }
    }
}
