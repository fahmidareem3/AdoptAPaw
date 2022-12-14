module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1240px',
      '2xl': '1440px'
    },
    colors: {
      brand: '#FF540B',
      primary: '#451E0E',
      'primary-light': '#FFEAE1',
      'primary-hover': '#9C8981',
      white: '#ffff',
      offwhite: '#EBEBEB',
      shadow: '#FBFBFB',
      input: '#F4F4F4',
      'gray-dark': '#273444',
      gray: '#8492a6',
      'gray-light': '#696969',
      'gray-hover': '#A6A6A6',
      green: '#2CDF53',
      blue: '#7059FF',
      red: '#FF0000',
      'card-light': '#FFF9F4'
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  }
};
