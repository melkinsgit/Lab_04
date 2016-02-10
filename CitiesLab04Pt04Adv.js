/**
 * Created by Margaret on 2/9/2016.
 */

// City prototype; got this idea from Anna; she recommended this per the Squirrel example
var City = function (name, lat, long, winner) {
    this.name = name;
    this.lat = lat;
    this.long = long;
    this.winner = winner;
    this.cityMarker = null;
};

var BIG_ARRAY = [
    new City ("Adjuntas", 18.1786, -66.7518, false),
    new City ("Aguada", 18.3604, -67.1764, false),
    new City ("Aguadilla", 18.432784, -67.15489, false),
    new City ("Aguadilla", 18.444906, -67.141177, false),
    new City ("Aguadilla", 18.444906, -67.141177, false),
    new City ("Maricao", 18.1749, -66.9463, false),
    new City ("Anasco", 18.287352, -67.13246, false),
    new City ("Arecibo", 18.40334, -66.67502, false),
    new City ("Arecibo", 18.401525, -66.766536, false),
    new City ("Arecibo", 18.45793, -66.73749, false),
    new City ("Barceloneta", 18.417994, -66.578341, false),
    new City ("Barceloneta", 18.4459, -66.556, false),
    new City ("Cabo Rojo", 18.087329, -67.144012, false),
    new City ("Penuelas", 18.053305, -66.724395, false),
    new City ("Camuy", 18.4345, -66.86, false),
    new City ("Adjuntas", 18.223551, -66.864503, false),
    new City ("Sabana Grande", 18.079179, -66.957768, false),
    new City ("Ciales", 18.325298, -66.473317, false),
    new City ("Utuado", 18.26651, -66.698482, false),
    new City ("Dorado", 18.4448, -66.2657, false),
    new City ("Toa Baja", 18.460263, -66.262148, false),
    new City ("Florida", 18.363825, -66.57198, false),
    new City ("Guanica", 17.98771, -66.89904, false),
    new City ("Gu+//0-nica", 17.9695, -66.913, false),
    new City ("Guayanilla", 18.0097, -66.799939, false),
    new City ("Hatillo", 18.489861, -66.823985, false),
    new City ("Hormigueros", 18.139518, -67.140018, false),
    new City ("Isabela", 18.503796, -67.023292, false),
    new City ("Jayuya", 18.214082, -66.58259, false),
    new City ("Lajas", 18.050635, -67.060099, false),
    new City ("Lares", 18.300208, -66.881484, false),
    new City ("Las Marias", 18.24946, -66.99079, false),
    new City ("Manati", 18.412913, -66.483789, false),
    new City ("Moca", 18.3792, -67.0846, false),
    new City ("Rincon", 18.3307, -67.2326, false),
    new City ("Quebradillas", 18.44439, -66.93381, false),
    new City ("Mayaguez", 18.203583, -67.133334, false),
    new City ("Mayaguez", 18.205116, -67.151512, false),
    new City ("San German", 18.1014, -67.0422, false),
    new City ("San Sebastian", 18.328424, -66.972921, false),
    new City ("Morovis", 18.326281, -66.40895, false),
    new City ("Vega Alta", 18.408051, -66.326657, false),
    new City ("Cata+//0-o", 18.4125, -66.3273, false),
    new City ("Vega Baja", 18.434418, -66.405809, false),
    new City ("Yauco", 18.0619, -66.8566, false),
    new City ("Aguas Buenas", 18.252624, -66.101417, false),
    new City ("Agua Buenas", 18.2534, -66.1072, false),
    new City ("Aibonito", 18.1327, -66.2657, false),
    new City ("Maunabo", 17.993718, -65.916036, false),
    new City ("Arroyo", 17.98973, -66.053427, false),
    new City ("Ponce", 18.012036, -66.584668, false),
    new City ("Ponce", 18.015, -66.6039, false),
    new City ("Ponce", 17.997993, -66.647572, false),
    new City ("Naguabo", 18.209879, -65.733642, false),
    new City ("Naranjito", 18.28867, -66.25966, false),
    new City ("Naguago", 18.2767, -66.2388, false),
    new City ("Orocovis", 18.217093, -66.449021, false),
    new City ("Patillas", 18.0129, -66.0021, false),
    new City ("Caguas", 18.229561, -66.032756, false),
    new City ("Caguas", 18.236156, -66.013797, false),
    new City ("Caguas", 18.208527, -66.055734, false),
    new City ("Ponce", 18.015359, -66.630167, false),
    new City ("Canovanas", 18.377342, -65.901509, false),
    new City ("Ponce", 18.0251, -66.6045, false),
    new City ("Ponce", 18.09908, -66.62342, false),
    new City ("Ponce", 18.006005, -66.627506, false),
    new City ("Ponce", 18.015846, -66.614125, false),
    new City ("Ceiba", 18.2521, -65.6563, false),
    new City ("Cayey", 18.108714, -66.167295, false),
    new City ("Cayey", 18.132427, -66.144878, false),
    new City ("Fajardo", 18.322572, -65.660427, false),
    new City ("Cidra", 18.174489, -66.158751, false),
    new City ("Cayey", 18.175797, -66.159706, false),
    new City ("Puerto Real", 18.334, -65.6378, false),
    new City ("Ceiba", 18.264906, -65.646166, false),
    new City ("Rio Grande", 18.349019, -65.812063, false),
    new City ("Canovanas", 18.369973, -65.91203, false),
    new City ("Salinas", 17.973836, -66.280955, false),
    new City ("San Lorenzo", 18.15537, -65.98777, false),
    new City ("Santa Isabel", 17.960217, -66.405321, false),
    new City ("Vieques", 18.09841, -65.42353, false),
    new City ("Villalba", 18.096241, -66.512826, false),
    new City ("Yabucoa", 18.050754, -65.87636, false),
    new City ("Coamo", 18.100248, -66.351013, false),
    new City ("Las Piedras", 18.181747, -65.86957, false),
    new City ("Loiza", 18.423074, -65.835601, false),
    new City ("Luquillo", 18.3581, -65.7235, false),
    new City ("Culebra", 18.307585, -65.303132, false),
    new City ("Juncos", 18.228088, -65.924769, false),
    new City ("Gurabo", 18.25495, -65.971047, false),
    new City ("Ponce", 18.073373, -66.562869, false),
    new City ("Comerio", 18.2284, -66.2202, false),
    new City ("Corozal", 18.3423, -66.317755, false),
    new City ("Guayama", 17.986315, -66.110558, false),
    new City ("Guayama", 17.974399, -66.100583, false),
    new City ("Humacao", 18.145707, -65.830808, false),
    new City ("Humacao", 18.1442, -65.8226, false),
    new City ("Barranquitas", 18.186387, -66.307568, false),
    new City ("Barranquita", 18.1848, -66.31, false),
    new City ("Juana Diaz", 18.038101, -66.443854, false),
    new City ("St Thomas", 18.342312, -64.92, false),
    new City ("Stthomas", 18.34028, -64.88556, false),
    new City ("St Thomas", 18.34028, -64.88556, false),
    new City ("St Thomas", 18.340859, -64.927156, false),
    new City ("St Croix", 17.773218, -64.769483, false),
    new City ("Stcroix", 17.7475, -64.70389, false),
    new City ("St John", 18.348137, -64.712833, false),
    new City ("St John", 18.330475, -64.794151, false),
    new City ("St Croix", 17.693341, -64.880771, false),
    new City ("Stcroix", 17.71333, -64.88222, false),
    new City ("St Croix", 17.721163, -64.798707, false),
    new City ("Stcroix", 17.72556, -64.78333, false),
    new City ("St Croix", 17.727328, -64.786197, false),
    new City ("Morovis", 0, 0, false),
    new City ("San Juan", 18.442571, -66.068848, false),
    new City ("San Juan", 18.465266, -66.095595, false),
    new City ("San Juan", 18.45155, -66.061467, false),
    new City ("San Juan", 18.45096, -66.081087, false),
    new City ("San Juan", 18.441741, -66.064737, false),
    new City ("San Juan", 18.4459, -66.0698, false),
    new City ("San Juan", 18.446679, -66.059278, false),
    new City ("San Juan", 18.448255, -66.038421, false),
    new City ("San Juan", 18.449899, -66.049579, false),
    new City ("San Juan", 18.438276, -66.055636, false),
    new City ("San Juan", 18.432769, -66.040208, false),
    new City ("San Juan", 18.419865, -66.049352, false),
    new City ("San Juan", 18.4185, -66.0601, false),
    new City ("San Juan", 18.408511, -66.037667, false),
    new City ("San Juan", 18.399492, -66.085799, false),
    new City ("San Juan", 18.448962, -66.051579, false),
    new City ("San Juan", 18.4102, -66.0365, false),
    new City ("San Juan", 18.3977, -66.0113, false),
    new City ("Carolina", 18.4088, -66.0131, false),
    new City ("San Juan", 18.403255, -66.047909, false),
    new City ("San Juan", 18.3588, -66.0594, false),
    new City ("Trujillo Alto", 18.37702, -66.055715, false),
    new City ("San Juan", 18.3969, -66.102209, false),
    new City ("San Juan", 18.362577, -66.071622, false),
    new City ("Guaynabo", 18.397617, -66.048334, false),
    new City ("Dorado", 0, 0, false),
    new City ("Toa Baja", 18.444436, -66.254336, false),
    new City ("Toa Baja", 18.409143, -66.212042, false),
    new City ("Toa Baja", 18.457923, -66.187528, false),
    new City ("Toa Alta", 18.35907, -66.258118, false),
    new City ("Toa Alta", 18.366098, -66.218219, false),
    new City ("Bayamon", 18.3391, -66.1656, false),
    new City ("San Juan", 18.3659, -66.1635, false),
    new City ("Bayamon", 18.350061, -66.188041, false),
    new City ("Bayamon", 18.3911, -66.1589, false),
    new City ("Bayamon", 18.387104, -66.150812, false),
    new City ("Bayamon", 18.411281, -66.160518, false),
    new City ("Catano", 18.42906, -66.13703, false),
    new City ("Toa Baja", 18.443251, -66.130487, false),
    new City ("Cata+//0-o", 0, 0, false),
    new City ("Catano", 18.4387, -66.1342, false),
    new City ("Cata+//0-o", 18.4387, -66.1342, false),
    new City ("Catano", 18.442143, -66.116826, false),
    new City ("Guaynabo", 18.4365, -66.1216, false),
    new City ("Guaynabo", 18.357974, -66.105148, false),
    new City ("Bayamon", 18.367, -66.1043, false),
    new City ("Guaynabo", 18.35554, -66.11372, false),
    new City ("Caguas", 18.233022, -66.024735, false),
    new City ("Catano", 18.355539, -66.113724, false),
    new City ("Guaynabo", 18.35499, -66.110889, false),
    new City ("Caguas", 18.355539, -66.113724, false),
    new City ("San Juan", 18.355539, -66.113724, false),
    new City ("Guaynabo", 18.35945, -66.11141, false),
    new City ("Catano", 18.301782, -66.086098, false),
    new City ("Trujillo Alto", 18.340213, -66.034937, false),
    new City ("Trujillo Alto", 18.353353, -66.007195, false),
    new City ("Carolina", 18.407294, -65.986311, false),
    new City ("Trujillo Alto", 18.435, -66.0144, false),
    new City ("Canovanas", 18.433904, -66.011756, false),
    new City ("Carolina", 18.406, -65.9882, false),
    new City ("Carolina", 18.416687, -65.977816, false),
    new City ("Carolina", 18.401042, -65.976222, false),
    new City ("Carolina", 18.358523, -65.964538, false),
    new City ("Canovanas", 18.395942, -65.896391, false),
    new City ("Carolina", 18.369252, -65.978922, false),
    new City ("Carolina", 18.364451, -65.938659, false),
    new City ("Canovanas", 18.348, -65.9478, false),
    new City ("Trujillo Alto", 18.378604, -65.97531, false),
    new City ("Carolina", 18.384799, -65.961051, false),
    new City ("Agawam", 42.074229, -72.645607, false),
    new City ("Amherst", 42.347276, -72.517505, false),
    new City ("Pelham", 42.377991, -72.468298, false),
    new City ("Barre", 42.400541, -72.115239, false),
    new City ("Belchertown", 42.267357, -72.398915, false),
    new City ("Brimfield", 42.119324, -72.202239, false),
    new City ("Chester", 42.280273, -72.983694, false),
    new City ("Chesterfield", 42.40351, -72.84921, false),
    new City ("Chicopee", 42.140798, -72.608833, false),
    new City ("Chicopee", 42.166279, -72.5881, false),
    new City ("Chicopee", 42.197987, -72.56203, false),
    new City ("Cummington", 42.458612, -72.889897, false),
    new City ("Easthampton", 42.268533, -72.672099, false),
    new City ("Westhampton", 42.30305, -72.77162, false),
    new City ("East Longmeadow", 42.069828, -72.507534, false),
    new City ("Feeding Hills", 42.064118, -72.673621, false),
    new City ("Gilbertville", 42.31689, -72.18622, false),
    new City ("Granby", 42.265446, -72.491348, false),
    new City ("Granville", 42.06609, -72.85474, false),
    new City ("Hadley", 42.353789, -72.55888, false),
    new City ("Hampden", 42.06648, -72.41236, false),
    new City ("Hatfield", 42.36997, -72.597953, false),
    new City ("Haydenville", 42.37618, -72.70552, false),
    new City ("Holyoke", 42.18584, -72.628668, false),
    new City ("Springfield", 42.194151, -72.647266, false),
    new City ("Huntington", 42.25, -72.8689, false),
    new City ("Leeds", 42.351543, -72.697908, false),
    new City ("Leverett", 42.46342, -72.49738, false),
    new City ("Ludlow", 42.171815, -72.459529, false),
    new City ("Monson", 42.113315, -72.324184, false),
    new City ("Northampton", 42.323387, -72.626638, false),
    new City ("Florence", 42.345646, -72.677315, false),
    new City ("Oakham", 42.357466, -72.046529, false),
    new City ("Palmer", 42.185367, -72.341906, false),
    new City ("Shutesbury", 42.448904, -72.429568, false),
    new City ("Southampton", 42.24135, -72.72426, false),
    new City ("South Hadley", 42.24129, -72.59941, false),
    new City ("Southwick", 42.061974, -72.753351, false),
    new City ("Wales", 42.1048, -72.3182, false),
    new City ("Ware", 42.2513, -72.262499, false),
    new City ("Warren", 42.219026, -72.189415, false),
    new City ("Westfield", 42.153498, -72.728871, false),
    new City ("West Springfield", 42.10807, -72.62119, false),
    new City ("West Warren", 42.190974, -72.222884, false),
    new City ("Whately", 42.45071, -72.60935, false),
    new City ("Wilbraham", 42.11125, -72.443222, false),
    new City ("Williamsburg", 42.3914, -72.73088, false),
    new City ("Worthington", 42.414841, -72.938542, false),
    new City ("Springfield", 42.110857, -72.571851, false),
    new City ("Springfield", 42.125284, -72.529179, false),
    new City ("Springfield", 42.102829, -72.585855, false),
    new City ("Springfield", 42.133086, -72.573708, false),
    new City ("Springfield", 42.101294, -72.580303, false),
    new City ("Longmeadow", 42.052435, -72.566206, false),
    new City ("Springfield", 42.119915, -72.61483, false),
    new City ("Springfield", 42.08863, -72.558829, false),
    new City ("Springfield", 42.11312, -72.56458, false),
    new City ("Springfield", 42.095599, -72.514149, false),
    new City ("Springfield", 42.11386, -72.511521, false),
    new City ("Springfield", 42.09732, -72.4923, false),
    new City ("Springfield", 42.125526, -72.484384, false),
    new City ("Indian Orchard", 42.154873, -72.493875, false),
    new City ("Springfield", 42.15734, -72.50682, false),
    new City ("Pittsfield", 42.45911, -73.22077, false),
    new City ("Adams", 42.619554, -73.12117, false),
    new City ("Becket", 42.3316, -73.08285, false),
    new City ("Cheshire", 42.563883, -73.158632, false),
    new City ("Dalton", 42.475545, -73.176882, false),
    new City ("Great Barrington", 42.250197, -73.328437, false),
    new City ("Hinsdale", 42.438189, -73.122945, false),
    new City ("Hancock", 42.576847, -73.299169, false),
    new City ("Lanesborough", 42.513325, -73.220565, false),
    new City ("Lee", 42.307864, -73.24772, false),
    new City ("Lenox", 42.35164, -73.258933, false),
    new City ("Great Barrington", 42.12032, -73.26869, false),
    new City ("Monterey", 42.178886, -73.216059, false),
    new City ("Clarksburg", 42.718343, -73.103528, false),
    new City ("Florida", 42.69322, -73.03747, false),
    new City ("North Adams", 42.659212, -73.105049, false),
    new City ("Otis", 42.207126, -73.096055, false),
    new City ("Richmond", 42.38148, -73.36717, false),
    new City ("Savoy", 42.56935, -72.99522, false),
    new City ("Sheffield", 42.105865, -73.374361, false),
    new City ("Williamstown", 42.671871, -73.240948, false),
    new City ("Greenfield", 42.59655, -72.621777, false),
    new City ("Leyden", 42.691467, -72.627565, false),
    new City ("Ashfield", 42.508366, -72.811073, false),
    new City ("Athol", 42.582672, -72.204474, false),
    new City ("Phillipston", 42.548016, -72.133624, false),
    new City ("Bernardston", 42.666093, -72.561474, false),
    new City ("Charlemont", 42.626978, -72.874055, false),
    new City ("Colrain", 42.67592, -72.69672, false),
    new City ("Conway", 42.50919, -72.67305, false),
    new City ("Erving", 42.589195, -72.485013, false),
    new City ("Heath", 42.701247, -72.829857, false),
    new City ("Montague", 42.5878, -72.54272, false),
    new City ("New Salem", 42.5213, -72.35789, false),
    new City ("Northfield", 42.68387, -72.484794, false),
    new City ("Orange", 42.58736, -72.30984, false),
    new City ("Petersham", 42.484345, -72.191099, false),
    new City ("Rowe", 42.704083, -72.888836, false),
    new City ("Royalston", 42.6776, -72.1441, false),
    new City ("Shelburne Falls", 42.608631, -72.735021, false),
    new City ("South Deerfield", 42.481326, -72.605076, false),
    new City ("Sunderland", 42.46217, -72.57543, false),
    new City ("Turners Falls", 42.597904, -72.522443, false),
    new City ("Gill", 42.648988, -72.497852, false),
    new City ("Warwick", 42.68725, -72.336817, false),
    new City ("Fitchburg", 42.581, -71.8215, false),
    new City ("Ashburnham", 42.602726, -71.921152, false),
    new City ("Ashby", 42.67886, -71.82327, false),
    new City ("Ayer", 42.566732, -71.579514, false),
    new City ("Devens", 42.548649, -71.606549, false),
    new City ("Baldwinville", 42.60504, -72.07517, false),
    new City ("East Templeton", 42.560727, -72.039704, false),
    new City ("Gardner", 42.574042, -71.982409, false),
    new City ("Groton", 42.617216, -71.579041, false),
    new City ("Harvard", 42.49745, -71.584918, false),
    new City ("Hubbardston", 42.474321, -72.007956, false),
    new City ("Leominster", 42.521975, -71.76498, false),
    new City ("Littleton", 42.541428, -71.507586, false),
    new City ("Lunenburg", 42.597466, -71.718727, false),
    new City ("Pepperell", 42.673864, -71.591346, false),
    new City ("Shirley", 42.539764, -71.65731, false),
    new City ("Templeton", 42.55394, -72.067144, false),
    new City ("Townsend", 42.67007, -71.713, false),
    new City ("Westminster", 42.52865, -71.875827, false),
    new City ("Winchendon", 42.683963, -72.052057, false),
    new City ("Auburn", 42.208352, -71.836883, false),
    new City ("Berlin", 42.381169, -71.639627, false),
    new City ("Blackstone", 42.029986, -71.538207, false),
    new City ("Boylston", 42.370958, -71.721404, false),
    new City ("Brookfield", 42.214013, -72.097119, false),
    new City ("Charlton", 42.132045, -71.971592, false),
    new City ("Clinton", 42.408234, -71.701043, false),
    new City ("East Brookfield", 42.232587, -72.037048, false),
    new City ("Douglas", 42.06759, -71.69996, false),
    new City ("Fiskdale", 42.16059, -72.127468, false),
    new City ("Grafton", 42.211611, -71.694732, false),
    new City ("Holden", 42.337435, -71.851342, false),
    new City ("Holland", 42.06547, -72.1599, false),
    new City ("Jefferson", 42.363029, -71.888263, false),
    new City ("Lancaster", 42.46824, -71.67529, false),
    new City ("Leicester", 42.223142, -71.912188, false),
    new City ("Millbury", 42.188061, -71.772927, false),
    new City ("Millville", 42.033396, -71.577508, false),
    new City ("New Braintree", 42.317467, -72.121958, false),
    new City ("Northborough", 42.32424, -71.64786, false),
    new City ("Northbridge", 42.154114, -71.649238, false),
    new City ("North Brookfield", 42.278864, -72.079811, false),
    new City ("North Grafton", 42.238383, -71.702221, false),
    new City ("Oxford", 42.107295, -71.870035, false),
    new City ("Princeton", 42.44243, -71.84371, false),
    new City ("Rutland", 42.369864, -71.954661, false),
    new City ("Shrewsbury", 42.283845, -71.693335, false),
    new City ("Southbridge", 42.08121, -72.022706, false),
    new City ("South Grafton", 42.179341, -71.695087, false),
    new City ("Spencer", 42.24149, -71.98406, false),
    new City ("Sterling", 42.41217, -71.777055, false),
    new City ("Sturbridge", 42.112846, -72.095053, false),
    new City ("Upton", 42.1634, -71.615874, false),
    new City ("Uxbridge", 42.083795, -71.62569, false),
    new City ("Webster", 42.043055, -71.868651, false),
    new City ("Dudley", 42.057329, -71.885883, false),
    new City ("Westborough", 42.293114, -71.604186, false),
    new City ("West Boylston", 42.37216, -71.786946, false),
    new City ("West Brookfield", 42.238728, -72.132807, false),
    new City ("Whitinsville", 42.108739, -71.657105, false),
    new City ("Sutton", 42.142559, -71.773685, false),
    new City ("Worcester", 42.269346, -71.820391, false),
    new City ("Worcester", 42.24787, -71.82468, false),
    new City ("Worcester", 42.256451, -71.787384, false),
    new City ("Worcester", 42.272986, -71.809659, false),
    new City ("Worcester", 42.305635, -71.801599, false),
    new City ("Worcester", 42.233786, -71.79619, false),
    new City ("Worcester", 42.252955, -71.80009, false),
    new City ("Worcester", 42.263347, -71.806168, false),
    new City ("Worcester", 42.254456, -71.818923, false),
    new City ("Paxton", 42.309645, -71.928445, false),
    new City ("Framingham", 42.293782, -71.416794, false),
    new City ("Framingham", 42.280787, -71.414688, false),
    new City ("Boxborough", 42.48182, -71.50605, false),
    new City ("Acton", 42.482, -71.4714, false),
    new City ("Ashland", 42.263602, -71.444304, false),
    new City ("Bedford", 42.49136, -71.285, false),
    new City ("Bedford", 42.4581, -71.2802, false),
    new City ("Hanscom Air Force Bs", 42.4564, -71.27692, false),
    new City ("Bolton", 42.429457, -71.608827, false),
    new City ("Carlisle", 42.526648, -71.348978, false),
    new City ("Concord", 42.45366, -71.346222, false),
    new City ("Holliston", 42.205186, -71.442762, false),
    new City ("Hopedale", 42.12889, -71.53757, false),
    new City ("Hopkinton", 42.21776, -71.51917, false),
    new City ("Hudson", 42.399875, -71.575137, false),
    new City ("Marlborough", 42.333694, -71.577368, false),
    new City ("Maynard", 42.42197, -71.45282, false),
    new City ("Mendon", 42.10891, -71.556486, false),
    new City ("Milford", 42.149983, -71.528635, false),
    new City ("Natick", 42.308091, -71.358509, false),
    new City ("Sherborn", 42.248068, -71.364039, false),
    new City ("Southborough", 42.29945, -71.54179, false),
    new City ("Lincoln", 42.425135, -71.313783, false),
    new City ("Stow", 42.437512, -71.508217, false),
    new City ("Sudbury", 42.39789, -71.39762, false),
    new City ("Wayland", 42.329307, -71.347218, false),
    new City ("Woburn", 42.46421, -71.17661, false),
    new City ("Burlington", 42.496218, -71.198108, false),
    new City ("Andover", 42.657463, -71.155895, false),
    new City ("Billerica", 42.561225, -71.273222, false),
    new City ("Chelmsford", 42.573238, -71.382307, false),
    new City ("Dracut", 42.676093, -71.337812, false),
    new City ("Dunstable", 42.673248, -71.482477, false),
    new City ("Haverhill", 42.77536, -71.05831, false),
    new City ("Haverhill", 42.76571, -71.120297, false),
    new City ("Georgetown", 42.72413, -70.98648, false),
    new City ("Groveland", 42.74285, -71.02386, false),
    new City ("Haverhill", 42.75933, -71.08669, false),
    new City ("Bradford", 42.75732, -71.06949, false),
    new City ("Lawrence", 42.709531, -71.167776, false),
    new City ("Lawrence", 42.708537, -71.173638, false),
    new City ("Lawrence", 42.69443, -71.16693, false),
    new City ("Methuen", 42.746125, -71.13219, false),
    new City ("North Andover", 42.67081, -71.09821, false),
    new City ("Lowell", 42.66033, -71.302261, false),
    new City ("Lowell", 42.621314, -71.335656, false),
    new City ("Lowell", 42.645279, -71.311481, false),
    new City ("Lowell", 42.641418, -71.312027, false),
    new City ("Merrimac", 42.82794, -71.00522, false),
    new City ("North Billerica", 42.56362, -71.2943, false),
    new City ("Billerica", 42.585364, -71.279191, false),
    new City ("North Chelmsford", 42.622657, -71.379345, false),
    new City ("North Reading", 42.56967, -71.12085, false),
    new City ("Reading", 42.52167, -71.12402, false),
    new City ("Tewksbury", 42.601489, -71.213741, false),
    new City ("Tyngsboro", 42.658771, -71.408137, false),
    new City ("Tyngsborough", 42.65401, -71.386261, false),
    new City ("Wakefield", 42.49532, -71.04399, false),
    new City ("Westford", 42.569875, -71.409147, false),
    new City ("Wilmington", 42.546627, -71.188467, false),
    new City ("Winchester", 42.44563, -71.15628, false),
    new City ("Lynn", 42.464464, -70.943327, false),
    new City ("Lynn", 42.4762, -70.92798, false),
    new City ("Lynn", 42.50489, -70.98347, false),
    new City ("Lynn", 42.460509, -70.969159, false),
    new City ("Saugus", 42.462741, -71.013747, false),
    new City ("Swampscott", 42.47455, -70.91716, false),
    new City ("Nahant", 42.422594, -70.932629, false),
    new City ("Amesbury", 42.85605, -70.934769, false),
    new City ("Beverly", 42.56582, -70.880797, false),
    new City ("Boxford", 42.66032, -71.00199, false),
    new City ("Byfield", 42.744732, -70.919583, false),
    new City ("Danvers", 42.582671, -70.931744, false),
    new City ("Essex", 42.63214, -70.78974, false),
    new City ("Gloucester", 42.627711, -70.655277, false),
    new City ("Hathorne", 42.589842, -70.977237, false),
    new City ("Ipswich", 42.687904, -70.852183, false),
    new City ("Lynnfield", 42.523342, -71.023099, false),
    new City ("Manchester", 42.581146, -70.765665, false),
    new City ("Marblehead", 42.50826, -70.85335, false),
    new City ("Middleton", 42.597306, -71.015909, false),
    new City ("Newburyport", 42.80767, -70.88627, false),
    new City ("Newbury", 42.790667, -70.870907, false),
    new City ("Salisbury", 42.853445, -70.869836, false),
    new City ("Peabody", 42.530173, -70.9463, false),
    new City ("Saugus", 42.453312, -70.990166, false),
    new City ("Rockport", 42.651744, -70.60873, false),
    new City ("Rowley", 42.71703, -70.8747, false),
    new City ("Salem", 42.517669, -70.889079, false),
    new City ("South Hamilton", 42.621203, -70.877997, false),
    new City ("Hamilton", 42.62916, -70.84708, false),
    new City ("Topsfield", 42.627155, -70.974362, false),
    new City ("Wenham", 42.60856, -70.88559, false),
    new City ("West Newbury", 42.808673, -70.962076, false),
    new City ("Bellingham", 42.07498, -71.4691, false),
    new City ("Canton", 42.1822, -71.10385, false),
    new City ("Cohasset", 42.232307, -70.809113, false),
    new City ("Dedham", 42.23124, -71.147379, false),
    new City ("Dover", 42.25125, -71.2712, false),
    new City ("East Walpole", 42.148938, -71.23267, false),
    new City ("Foxborough", 42.057287, -71.244753, false),
    new City ("Franklin", 42.089034, -71.40066, false),
    new City ("Hingham", 42.227476, -70.87764, false),
    new City ("Hull", 42.304322, -70.920629, false),
    new City ("Mansfield", 42.02532, -71.2221, false),
    new City ("Marshfield", 42.132689, -70.727361, false),
    new City ("Medfield", 42.194319, -71.312783, false),
    new City ("Medway", 42.142305, -71.406388, false),
    new City ("Millis", 42.164665, -71.360625, false),
    new City ("Norfolk", 42.09727, -71.32754, false),
    new City ("Norwell", 42.155312, -70.879341, false),
    new City ("Norwood", 42.177018, -71.205703, false),
    new City ("Scituate", 42.203863, -70.768812, false),
    new City ("Sharon", 42.118828, -71.171728, false),
    new City ("Stoughton", 42.13016, -71.13085, false),
    new City ("Walpole", 42.163593, -71.238064, false),
    new City ("Westwood", 42.22618, -71.21953, false),
    new City ("Wrentham", 42.072223, -71.332586, false),
    new City ("Boston", 42.313415, -71.059233, false),
    new City ("Boston", 42.363089, -71.052056, false),
    new City ("Boston", 42.3481, -71.0645, false),
    new City ("Boston", 42.36625, -71.0534, false),
    new City ("Boston", 42.365826, -71.066274, false),
    new City ("Boston", 42.341584, -71.091687, false),
    new City ("Boston", 42.3508, -71.0776, false),
    new City ("Boston", 42.3407, -71.07246, false),
    new City ("Roxbury", 42.340186, -71.079101, false),
    new City ("Roxbury", 42.323969, -71.087661, false),
    new City ("Roxbury Plain", 42.315102, -71.078809, false),
    new City ("Roxbury", 42.327624, -71.105146, false),
    new City ("Boston", 42.3311, -71.10019, false),
    new City ("Roxbury Crossing", 42.333309, -71.087812, false),
    new City ("Dorchester", 42.316232, -71.084471, false),
    new City ("Dorchester", 42.292318, -71.064236, false),
    new City ("Boston", 42.3013, -71.0588, false),
    new City ("Dorchester", 42.289459, -71.072014, false),
    new City ("Dorchester Center", 42.289932, -71.085963, false),
    new City ("Dorchester", 42.321757, -71.060738, false),
    new City ("Mattapan", 42.277842, -71.077454, false)
];

// AreaMap prototype
var AreaMap = function (lat, long, zoom){
    this.lat = lat;
    this.long = long;
    this.zoom = zoom;
};

// map object
var startMap = new AreaMap( 39.2930704,-102.2608346, 4);

// an array of three city objects
var midWestCities = [
    new City ("Minneapolis", 44.97, -93.26, true),
    new City ("Madison",43.07, -89.4, false),
    new City ("Milwaukee", 43.05, -87.95, false)
];

var caliCities = [
    new City ("San Francisco", 37.7833, -122.4167, false),
    new City ("Sacramento", 38.5556, -121.4689, false),
    new City ("Fresno", 36.7500, -119.7667, true)];

var eastCities = [
    new City ("Stamford", 41.0528, -73.5389, true),
    new City ("New Haven", 41.3100, -72.9236, false),
    new City ("Providence", 41.8236, -71.4222, false)];

var map;
var points = 0;
var customMapType;
var customMapTypeId = "custom_style";

function initMap () {

    // for my map style I modified what I found at:  https://developers.google.com/maps/documentation/javascript/examples/maptype-styled-simple
    customMapType = new google.maps.StyledMapType([
        {
            stylers: [
                {visibility: 'simplified'},  // simplifies the road lines
                {gamma: 0.5},
                {weight: 0.5}
            ]
        },
        {
            elementType: 'labels',
            stylers: [{visibility: 'off'}]
        },
        {
            featureType: 'water'
        }
    ], {
        name: 'Custom Style'
    });

    var mapDiv = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(startMap.lat, startMap.long),   // Lat and long to center the map
        zoom: startMap.zoom,                                   // 0 = the whole world, 22 = max zoom
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.SATELLITE, customMapTypeId]
        }
    };

    //And create the map, with the options specified
    map = new google.maps.Map(mapDiv, mapOptions);

    // Add the custom style features
    map.mapTypes.set(customMapTypeId, customMapType);
    map.setMapTypeId(customMapTypeId);

    var playMidWest = document.getElementById("midWestButton");
    playMidWest.addEventListener("click", function () {
        makeMarkers(midWestCities);
        didYouWin(midWestCities)});

    var playCali = document.getElementById("caliButton");
    playCali.addEventListener("click", function () {
        makeMarkers(caliCities);
        didYouWin(caliCities)});

    var playEast = document.getElementById("eastButton");
    playEast.addEventListener("click", function () {
        makeMarkers(eastCities);
        didYouWin(eastCities)});

    var getScore = document.getElementById("gameOver");
    getScore.addEventListener("click", function () {
        console.log(points);
        console.log(document.getElementById("score").innerHTML);
        document.getElementById("score").innerHTML = "Your score for this game is: " + points.toString();
    });

} // end initMap

function didYouWin (cityArray) {
    for (var k = 0; k < cityArray.length; k++) {
        cityArray[k].cityMarker.addListener("click", function () {
            if (this.winner == false) {
                alert("Sorry!\nThis is " + this.name + "!");
            } else {
                alert("Right!\nYou found " + this.name + "!");
                points += 1;
                console.log ("just won in " + this.name + " and points is " + points);
            }
        });
    }
}

function makeMarkers(cityArray) {

    // the following is from Clara's week 4 examples - I have modified to work with passed array and added some fields to Marker prototype through cityOptions that will be applied to creation of cityMarker

    //Can add features, points of interest, routes, lines etc. to maps
    //Adding a marker to the map
    //Like the map, set the options for the marker
    for (var i = 0; i < cityArray.length; i++) {
        var cityOptions = {
            position: new google.maps.LatLng(cityArray[i].lat, cityArray[i].long), //Where?
            map: map,                       //What map?
            draggable: false,               //No moving the marker!
            name: cityArray[i].name,        //Name for checking in game ????
            winner: cityArray[i].winner
        };

        //Create the marker, with the options above
        //A new marker with the map option set is automatically added to
        //the map it belongs to.
        cityArray[i].cityMarker = new google.maps.Marker(cityOptions);
    }
}

// from https://developers.google.com/maps/documentation/javascript/examples/marker-remove
// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
//        clearMarkers();
    for (var i = 0; i < midWestCities.length; i++) {
        midWestCities[i].cityMarker = null;
    }
    for (var j = 0; j < caliCities.length; j++) {
        caliCities[j].cityMarker = null;
    }
    for (var k = 0; k < eastCities.length; k++) {
        eastCities[k].cityMarker = null;
    }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
    setMapOnAll(null);
}

document.getElementById("result").innerHTML = BIG_ARRAY[35].name;
console.log(BIG_ARRAY[35]);