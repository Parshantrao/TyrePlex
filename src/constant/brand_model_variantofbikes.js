const popularBikeBrand = [
    'Hero', 'Honda', 'Bajaj', 'Yamaha', 'Royal Enfield',
    'KTM', 'Suzuki', 'TVS', 'Kawasaki', 'Harley-Davidson',
    'Aprilia', 'Ducati', 'Triumph', 'Benelli', 'BMW Motorrad',
    'MV Agusta', 'Indian', 'Moto Guzzi', 'Vespa', 'Mahindra'
];

const bikeModelsData = {
    'Hero': ['Splendor Plus', 'HF Deluxe', 'Glamour', 'Xtreme 160R', 'Passion Pro'],
    'Honda': ['CB Shine', 'Unicorn', 'Hornet 2.0', 'CBR 250R', 'Activa 6G'],
    'Bajaj': ['Pulsar 150', 'Pulsar NS200', 'Avenger Cruise 220', 'Dominar 400', 'CT 100'],
    'Yamaha': ['FZ S FI', 'MT 15', 'R15 V4', 'Fascino 125', 'RayZR 125'],
    'Royal Enfield': ['Classic 350', 'Meteor 350', 'Bullet 350', 'Himalayan', 'Interceptor 650'],
    'KTM': ['Duke 200', 'RC 390', 'Adventure 390', 'Duke 125', 'RC 200'],
    'Suzuki': ['Gixxer SF', 'Access 125', 'Intruder', 'Burgman Street', 'Hayabusa'],
    'TVS': ['Apache RTR 160', 'Jupiter', 'NTorq 125', 'XL100', 'Ronin'],
    'Kawasaki': ['Ninja 300', 'Z900', 'Versys 650', 'Vulcan S', 'W175'],
    'Harley-Davidson': ['Iron 883', 'Street 750', 'Forty-Eight', 'Fat Boy', 'Street Bob'],
    'Aprilia': ['SR 160', 'RS 660', 'Tuono 660', 'Shiver 900', 'Dorsoduro 900'],
    'Ducati': ['Panigale V4', 'Scrambler 800', 'Multistrada 950', 'Diavel 1260', 'Monster 821'],
    'Triumph': ['Street Triple', 'Bonneville T120', 'Tiger 900', 'Speed Twin', 'Rocket 3'],
    'Benelli': ['Imperiale 400', 'TRK 502', 'Leoncino 500', 'TNT 600i', '502C'],
    'BMW Motorrad': ['G 310 R', 'G 310 GS', 'R 1250 GS', 'S 1000 RR', 'F 900 R'],
    'MV Agusta': ['Brutale 800', 'Dragster 800', 'F3 800', 'Turismo Veloce 800', 'Superveloce 800'],
    'Indian': ['Scout', 'Chief Dark Horse', 'FTR 1200', 'Chieftain', 'Roadmaster'],
    'Moto Guzzi': ['V7', 'V9 Bobber', 'V85 TT', 'Audace', 'California Touring'],
    'Vespa': ['VXL 150', 'SXL 150', 'Notte 125', 'Elegante 150', 'ZX 125'],
    'Mahindra': ['Mojo 300', 'Centuro', 'Gusto', 'Pantero', 'Rodeo']
};

const bikeVariantsData = {
        'Splendor Plus': ['Kick Start', 'Self Start', 'i3s'],
        'HF Deluxe': ['Kick Start', 'Self Start', 'Self Start Alloy'],
        'Glamour': ['Drum', 'Disc', 'Xtec'],
        'Xtreme 160R': ['Single Disc', 'Dual Disc', 'Stealth Edition'],
        'Passion Pro': ['Drum', 'Disc'],
    
        'CB Shine': ['Drum', 'Disc'],
        'Unicorn': ['Standard'],
        'Hornet 2.0': ['Standard', 'Repsol Edition'],
        'CBR 250R': ['Standard', 'ABS'],
        'Activa 6G': ['Standard', 'Deluxe'],
    
        'Pulsar 150': ['Neon', 'Single Disc', 'Twin Disc'],
        'Pulsar NS200': ['Standard', 'BS6'],
        'Avenger Cruise 220': ['Standard'],
        'Dominar 400': ['Standard', 'UG'],
        'CT 100': ['KS Alloy', 'ES Alloy'],
    
        'FZ S FI': ['Standard', 'Dark Knight'],
        'MT 15': ['Standard', 'MotoGP Edition'],
        'R15 V4': ['Standard', 'M', 'MotoGP Edition'],
        'Fascino 125': ['Drum', 'Disc'],
        'RayZR 125': ['Drum', 'Disc'],
    
        'Classic 350': ['Redditch', 'Halcyon', 'Signals', 'Dark'],
        'Meteor 350': ['Fireball', 'Stellar', 'Supernova'],
        'Bullet 350': ['Standard', 'ES'],
        'Himalayan': ['Standard', 'Sleet', 'Lake Blue'],
        'Interceptor 650': ['Standard', 'Custom', 'Chrome'],
    
        'Duke 200': ['Standard'],
        'RC 390': ['Standard'],
        'Adventure 390': ['Standard'],
        'Duke 125': ['Standard'],
        'RC 200': ['Standard'],
    
        'Gixxer SF': ['Standard', 'MotoGP Edition'],
        'Access 125': ['Drum', 'Disc'],
        'Intruder': ['Standard'],
        'Burgman Street': ['Standard', 'Bluetooth'],
        'Hayabusa': ['Standard'],
    
        'Apache RTR 160': ['Drum', 'Disc', 'BS6'],
        'Jupiter': ['Standard', 'ZX', 'Classic'],
        'NTorq 125': ['Drum', 'Disc', 'Race Edition'],
        'XL100': ['Comfort', 'Heavy Duty'],
        'Ronin': ['SS', 'TD', 'TD+'],
    
        'Ninja 300': ['Standard'],
        'Z900': ['Standard'],
        'Versys 650': ['Standard'],
        'Vulcan S': ['Standard'],
        'W175': ['Standard'],
    
        'Iron 883': ['Standard'],
        'Street 750': ['Standard'],
        'Forty-Eight': ['Standard'],
        'Fat Boy': ['Standard'],
        'Street Bob': ['Standard'],
    
        'SR 160': ['Standard', 'Race', 'Carbon'],
        'RS 660': ['Standard'],
        'Tuono 660': ['Standard'],
        'Shiver 900': ['Standard'],
        'Dorsoduro 900': ['Standard'],
    
        'Panigale V4': ['Standard', 'V4 S', 'V4 R'],
        'Scrambler 800': ['Icon', 'Nightshift', 'Desert Sled'],
        'Multistrada 950': ['Standard'],
        'Diavel 1260': ['Standard', 'S'],
        'Monster 821': ['Standard', 'Stealth'],
    
        'Street Triple': ['R', 'RS'],
        'Bonneville T120': ['Standard', 'Black'],
        'Tiger 900': ['GT', 'Rally'],
        'Speed Twin': ['Standard'],
        'Rocket 3': ['R', 'GT'],
    
        'Imperiale 400': ['Standard'],
        'TRK 502': ['Standard', 'X'],
        'Leoncino 500': ['Standard'],
        'TNT 600i': ['Standard'],
        '502C': ['Standard'],
    
        'G 310 R': ['Standard'],
        'G 310 GS': ['Standard'],
        'R 1250 GS': ['Standard', 'Adventure'],
        'S 1000 RR': ['Standard', 'M Package'],
        'F 900 R': ['Standard'],
    
        'Brutale 800': ['RR', 'Rosso'],
        'Dragster 800': ['RR', 'Rosso'],
        'F3 800': ['Standard', 'RC'],
        'Turismo Veloce 800': ['Standard', 'Lusso'],
        'Superveloce 800': ['Standard', 'Alpine'],
    
        'Scout': ['Standard', 'Bobber', 'Sixty'],
        'Chief Dark Horse': ['Standard'],
        'FTR 1200': ['Standard', 'S'],
        'Chieftain': ['Standard', 'Limited'],
        'Roadmaster': ['Standard', 'Limited'],
    
        'V7': ['Standard', 'Stone'],
        'V9 Bobber': ['Standard'],
        'V85 TT': ['Standard', 'Adventure'],
        'Audace': ['Standard'],
        'California Touring': ['Standard'],
    
        'VXL 150': ['Standard'],
        'SXL 150': ['Standard'],
        'Notte 125': ['Standard'],
        'Elegante 150': ['Standard'],
        'ZX 125': ['Standard'],
    
        'Mojo 300': ['Standard', 'ABS'],
        'Centuro': ['Standard'],
        'Gusto': ['Standard'],
        'Pantero': ['Standard'],
        'Rodeo': ['Standard']
};

export { popularBikeBrand, bikeModelsData, bikeVariantsData };
