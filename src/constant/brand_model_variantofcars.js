const popularBrand = [
    'Maruti Suzuki', 'MG', 'Hyundai', 'Honda', 'Toyota',
    'Mahindra', 'Tata', 'KIA', 'Ford', 'Nissan'

]

const otherBrand = [
    "Strom Motors", "Abarth", "Pravaig", "Reva", "PMV", "BYD Auto", "Mclaren", "Opel"
]

const modelsData = {
    'Maruti Suzuki': ['Swift', 'Baleno', 'Wagon R', 'Alto', 'Ciaz'],
    'MG': ['Hector', 'Gloster', 'Astor'],
    'Hyundai': ['i20', 'Creta', 'Venue', 'Verna', 'Santro'],
    'Honda': ['City', 'Jazz', 'WR-V'],
    'Toyota': ['Fortuner', 'Innova', 'Yaris'],
    'Mahindra': ['XUV500', 'Thar', 'Scorpio'],
    'Tata': ['Nexon', 'Harrier', 'Safari'],
    'KIA': ['Seltos', 'Sonet', 'Carnival'],
    'Ford': ['Figo', 'Ecosport', 'Endeavour'],
    'Nissan': ['Magnite', 'Kicks', 'Terrano'],
    'Strom Motors': ['R3'],
    'Abarth': ['595'],
    'Pravaig': ['Extinction Mk1'],
    'Reva': ['i'],
    'PMV': ['EaS-E'],
    'BYD Auto': ['e6', 'Atto 3'],
    'Mclaren': ['GT', '720S', 'Artura'],
    'Opel': ['Astra', 'Zafira'],
};

const variantsData = {
    'Swift': ['LXI', 'VXI', 'ZXI', 'ZXI+'],
    'Baleno': ['Sigma', 'Delta', 'Zeta', 'Alpha'],
    'Wagon R': ['LXI', 'VXI', 'ZXI'],
    'Alto': ['STD', 'LXI', 'VXI', 'VXI+'],
    'Ciaz': ['Sigma', 'Delta', 'Zeta', 'Alpha'],
    'Ertiga': ['LXI', 'VXI', 'ZXI', 'ZXI+'],

    'Hector': ['Style', 'Super', 'Smart', 'Sharp'],
    'Gloster': ['Super', 'Smart', 'Sharp', 'Savvy'],
    'Astor': ['Style', 'Super', 'Smart', 'Sharp'],
    'Zs EV': ['Excite', 'Exclusive'],

    'i20': ['Magna', 'Sportz', 'Asta'],
    'Creta': ['E', 'EX', 'S', 'SX', 'SX(O)'],
    'Venue': ['E', 'S', 'SX', 'SX+'],
    'Verna': ['S', 'SX', 'SX(O)'],
    'Santro': ['Era', 'Magna', 'Sportz', 'Asta'],
    'Tucson': ['GL', 'GLS'],

    'City': ['V', 'VX', 'ZX'],
    'Jazz': ['V', 'VX', 'ZX'],
    'WR-V': ['S', 'V', 'VX'],
    'Amaze': ['E', 'S', 'VX'],
    'Civic': ['V', 'VX', 'ZX'],

    'Fortuner': ['G', 'V', 'TRD', 'GR Sport'],
    'Innova': ['G', 'V', 'VX', 'ZX'],
    'Yaris': ['J', 'G', 'V', 'VX'],
    'Glanza': ['G', 'V', 'S'],
    'Camry': ['Hybrid'],

    'XUV500': ['W5', 'W7', 'W9', 'W11'],
    'Thar': ['AX', 'AX (O)', 'LX'],
    'Scorpio': ['S3+', 'S5', 'S7', 'S9', 'S11'],
    'Bolero': ['B4', 'B6', 'B6 (O)'],
    'XUV300': ['W4', 'W6', 'W8', 'W8 (O)'],

    'Nexon': ['XE', 'XM', 'XZ', 'XZ+'],
    'Harrier': ['XE', 'XM', 'XT', 'XZ', 'XZ+'],
    'Safari': ['XE', 'XM', 'XT', 'XZ', 'XZ+'],
    'Altroz': ['XE', 'XM', 'XT', 'XZ', 'XZ+'],
    'Tiago': ['XE', 'XM', 'XT', 'XZ', 'XZ+'],

    'Seltos': ['HTE', 'HTK', 'HTX', 'GTX'],
    'Sonet': ['HTE', 'HTK', 'HTX', 'GTX'],
    'Carnival': ['Premium', 'Prestige', 'Limousine'],
    'Carens': ['Premium', 'Prestige', 'Luxury'],

    'Figo': ['Ambiente', 'Trend', 'Titanium', 'Blu'],
    'Ecosport': ['Ambiente', 'Trend', 'Titanium', 'S'],
    'Endeavour': ['Titanium', 'Titanium+', 'Sport'],
    'Aspire': ['Ambiente', 'Trend', 'Titanium'],
    'Freestyle': ['Ambiente', 'Trend', 'Titanium'],

    'Magnite': ['XE', 'XL', 'XV', 'XV Premium'],
    'Kicks': ['XL', 'XV', 'XV Premium'],
    'Terrano': ['XE', 'XL', 'XV', 'XV Premium'],
    'Sunny': ['XE', 'XL', 'XV'],
    'Micra': ['XL', 'XV'],

    'R3': ['Standard', 'Deluxe'],
    '595': ['Competizione', 'Turismo'],
    'Extinction Mk1': ['Base'],
    'i': ['Standard'],
    'EaS-E': ['Standard'],
    'e6': ['Standard', 'Long Range'],
    'Atto 3': ['Standard', 'Extended Range'],
    'GT': ['Standard'],
    '720S': ['Performance', 'Luxury'],
    'Artura': ['Standard'],
    'Astra': ['Standard'],
    'Zafira': ['Standard'],
};

export {popularBrand, otherBrand, modelsData, variantsData }