/**
 * Created by Margaret on 2/9/2016.
 */

// City prototype; got this idea from Anna; she recommended this per the Squirrel example
var City = function (name, lat, long) {
    this.name = name;
    this.lat = lat;
    this.long = long;
    this.cityMarker = null;
};

var BIG_ARRAY = [
    new City ("Agawam", 42.074229, -72.645607),
    new City ("Amherst", 42.347276, -72.517505),
    new City ("Pelham", 42.377991, -72.468298),
    new City ("Barre", 42.400541, -72.115239),
    new City ("Belchertown", 42.267357, -72.398915),
    new City ("Brimfield", 42.119324, -72.202239),
    new City ("Chester", 42.280273, -72.983694),
    new City ("Chesterfield", 42.40351, -72.84921),
    new City ("Chicopee", 42.140798, -72.608833),
    new City ("Chicopee", 42.166279, -72.5881),
    new City ("Chicopee", 42.197987, -72.56203),
    new City ("Cummington", 42.458612, -72.889897),
    new City ("Easthampton", 42.268533, -72.672099),
    new City ("Westhampton", 42.30305, -72.77162),
    new City ("East Longmeadow", 42.069828, -72.507534),
    new City ("Feeding Hills", 42.064118, -72.673621),
    new City ("Gilbertville", 42.31689, -72.18622),
    new City ("Granby", 42.265446, -72.491348),
    new City ("Granville", 42.06609, -72.85474),
    new City ("Hadley", 42.353789, -72.55888),
    new City ("Hampden", 42.06648, -72.41236),
    new City ("Hatfield", 42.36997, -72.597953),
    new City ("Haydenville", 42.37618, -72.70552),
    new City ("Holyoke", 42.18584, -72.628668),
    new City ("Springfield", 42.194151, -72.647266),
    new City ("Huntington", 42.25, -72.8689),
    new City ("Leeds", 42.351543, -72.697908),
    new City ("Leverett", 42.46342, -72.49738),
    new City ("Ludlow", 42.171815, -72.459529),
    new City ("Monson", 42.113315, -72.324184),
    new City ("Northampton", 42.323387, -72.626638),
    new City ("Florence", 42.345646, -72.677315),
    new City ("Oakham", 42.357466, -72.046529),
    new City ("Palmer", 42.185367, -72.341906),
    new City ("Shutesbury", 42.448904, -72.429568),
    new City ("Southampton", 42.24135, -72.72426),
    new City ("South Hadley", 42.24129, -72.59941),
    new City ("Southwick", 42.061974, -72.753351),
    new City ("Wales", 42.1048, -72.3182),
    new City ("Ware", 42.2513, -72.262499),
    new City ("Warren", 42.219026, -72.189415),
    new City ("Westfield", 42.153498, -72.728871),
    new City ("West Springfield", 42.10807, -72.62119),
    new City ("West Warren", 42.190974, -72.222884),
    new City ("Whately", 42.45071, -72.60935),
    new City ("Wilbraham", 42.11125, -72.443222),
    new City ("Williamsburg", 42.3914, -72.73088),
    new City ("Worthington", 42.414841, -72.938542),
    new City ("Springfield", 42.110857, -72.571851),
    new City ("Springfield", 42.125284, -72.529179),
    new City ("Springfield", 42.102829, -72.585855),
    new City ("Springfield", 42.133086, -72.573708),
    new City ("Springfield", 42.101294, -72.580303),
    new City ("Longmeadow", 42.052435, -72.566206),
    new City ("Springfield", 42.119915, -72.61483),
    new City ("Springfield", 42.08863, -72.558829),
    new City ("Springfield", 42.11312, -72.56458),
    new City ("Springfield", 42.095599, -72.514149),
    new City ("Springfield", 42.11386, -72.511521),
    new City ("Springfield", 42.09732, -72.4923),
    new City ("Springfield", 42.125526, -72.484384),
    new City ("Indian Orchard", 42.154873, -72.493875),
    new City ("Springfield", 42.15734, -72.50682),
    new City ("Pittsfield", 42.45911, -73.22077),
    new City ("Adams", 42.619554, -73.12117),
    new City ("Becket", 42.3316, -73.08285),
    new City ("Cheshire", 42.563883, -73.158632),
    new City ("Dalton", 42.475545, -73.176882),
    new City ("Great Barrington", 42.250197, -73.328437),
    new City ("Hinsdale", 42.438189, -73.122945),
    new City ("Hancock", 42.576847, -73.299169),
    new City ("Lanesborough", 42.513325, -73.220565),
    new City ("Lee", 42.307864, -73.24772),
    new City ("Lenox", 42.35164, -73.258933),
    new City ("Great Barrington", 42.12032, -73.26869),
    new City ("Monterey", 42.178886, -73.216059),
    new City ("Clarksburg", 42.718343, -73.103528),
    new City ("Florida", 42.69322, -73.03747),
    new City ("North Adams", 42.659212, -73.105049),
    new City ("Otis", 42.207126, -73.096055),
    new City ("Richmond", 42.38148, -73.36717),
    new City ("Savoy", 42.56935, -72.99522),
    new City ("Sheffield", 42.105865, -73.374361),
    new City ("Williamstown", 42.671871, -73.240948),
    new City ("Greenfield", 42.59655, -72.621777),
    new City ("Leyden", 42.691467, -72.627565),
    new City ("Ashfield", 42.508366, -72.811073),
    new City ("Athol", 42.582672, -72.204474),
    new City ("Phillipston", 42.548016, -72.133624),
    new City ("Bernardston", 42.666093, -72.561474),
    new City ("South Deerfield", 42.481326, -72.605076),
    new City ("Sunderland", 42.46217, -72.57543),
    new City ("Turners Falls", 42.597904, -72.522443),
    new City ("Gill", 42.648988, -72.497852),
    new City ("Warwick", 42.68725, -72.336817),
    new City ("Fitchburg", 42.581, -71.8215),
    new City ("Ashburnham", 42.602726, -71.921152),
    new City ("Ashby", 42.67886, -71.82327),
    new City ("Ayer", 42.566732, -71.579514),
    new City ("Devens", 42.548649, -71.606549),
    new City ("Baldwinville", 42.60504, -72.07517),
    new City ("East Templeton", 42.560727, -72.039704),
    new City ("North Smithfield", 41.953963, -71.544601),
    new City ("Wyoming", 41.500759, -71.661828),
    new City ("Providence", 41.820899, -71.421671),
    new City ("North Providence", 41.868306, -71.451115),
    new City ("Providence", 41.851013, -71.434121),
    new City ("North Providence", 41.861762, -71.469092),
    new City ("Providence", 41.807599, -71.4135),
    new City ("Cranston", 41.773273, -71.40715),
    new City ("Providence", 41.803301, -71.415868),
    new City ("Providence", 41.81964, -71.39393),
    new City ("Providence", 41.799506, -71.418236),
    new City ("Providence", 41.850613, -71.427104),
    new City ("Providence", 41.811095, -71.435392),
    new City ("Cranston", 41.780173, -71.437864),
    new City ("North Providence", 41.857273, -71.47716),
    new City ("East Providence", 41.812453, -71.382422),
    new City ("Riverside", 41.76358, -71.34186),
    new City ("Rumford", 41.841722, -71.360764),
    new City ("Smithfield", 41.881123, -71.541584),
    new City ("Brookline", 42.739439, -71.665266),
    new City ("Candia", 43.062262, -71.287983),
    new City ("Chester", 42.958527, -71.255391),
    new City ("Deerfield", 43.14773, -71.23424),
    new City ("Derry", 42.886175, -71.305299),
    new City ("Epping", 43.045717, -71.07545),
    new City ("Francestown", 42.981583, -71.802573),
    new City ("Fremont", 42.985409, -71.130973),
    new City ("Goffstown", 43.012413, -71.583711),
    new City ("Dunbarton", 43.10034, -71.61077),
    new City ("Greenfield", 42.950869, -71.879211),
    new City ("East Waterboro", 43.586245, -70.705953),
    new City ("Freeport", 43.856151, -70.107312),
    new City ("Fryeburg", 44.014805, -70.974574),
    new City ("Gorham", 43.674174, -70.447171),
    new City ("Gray", 43.903129, -70.349056),
    new City ("Harrison", 44.086434, -70.675204),
    new City ("Hiram", 43.810771, -70.869503),
    new City ("Hollis", 43.637121, -70.602569),
    new City ("Dorset", 43.221917, -73.065721),
    new City ("Manchester Center", 43.175528, -73.05229),
    new City ("North Bennington", 42.929987, -73.244521),
    new City ("Pownal", 42.800196, -73.218058),
    new City ("Shaftsbury", 42.944908, -73.208114),
    new City ("Brattleboro", 42.840171, -72.557947),
    new City ("Guilford", 42.800639, -72.622544),
    new City ("Brattleboro", 42.853708, -72.597097),
    new City ("East Dover", 42.9467, -72.79295),
    new City ("Jacksonville", 42.796821, -72.821848),
    new City ("Sharon", 41.87661, -73.478453),
    new City ("Simsbury", 41.88104, -72.803643),
    new City ("Somers", 42.031379, -72.500893),
    new City ("South Glastonbury", 41.637665, -72.6152),
    new City ("South Windsor", 41.84422, -72.555321),
    new City ("Stafford Springs", 41.971519, -72.301838),
    new City ("Union", 41.985027, -72.157036),
    new City ("Staffordville", 41.99365, -72.25731),
    new City ("West Orange", 40.792926, -74.286498),
    new City ("Parsippany", 40.869744, -74.391854),
    new City ("Passaic", 40.867489, -74.120761),
    new City ("Wallington", 40.854907, -74.10681),
    new City ("Pine Brook", 40.881711, -74.352127),
    new City ("Warren", 40.638666, -74.516744),
    new City ("Plainfield", 40.620505, -74.423168),
    new City ("Plainfield", 40.622655, -74.439656),
    new City ("Plainfield", 40.610602, -74.413281),
    new City ("Warren", 40.637175, -74.485978),
    new City ("Yorktown Heights", 41.329984, -73.829542),
    new City ("White Plains", 41.028371, -73.768845),
    new City ("White Plains", 41.064883, -73.776527),
    new City ("West Harrison", 41.037997, -73.746363),
    new City ("White Plains", 41.049007, -73.764084),
    new City ("White Plains", 41.012139, -73.763081),
    new City ("White Plains", 41.020361, -73.774607),
    new City ("White Plains", 41.035945, -73.791525),
    new City ("Yonkers", 40.944175, -73.896755),
    new City ("Yonkers", 40.949976, -73.888887),
    new City ("Yonkers", 40.92211, -73.874177),
    new City ("Yonkers", 40.913654, -73.890354),
    new City ("Hastings On Hudson", 40.979479, -73.881077),
    new City ("Eastchester", 40.942822, -73.812388),
    new City ("Yonkers", 40.961321, -73.827106),
    new City ("Tuckahoe", 40.947305, -73.8243),
    new City ("Bronxville", 40.937635, -73.830832),
    new City ("McKeesport", 40.322223, -79.848289),
    new City ("Mc Keesport", 40.324155, -79.867345),
    new City ("Port Vue", 40.330357, -79.878065),
    new City ("Mc Keesport", 40.292119, -79.81195),
    new City ("McKeesport", 40.311475, -79.802315),
    new City ("Mc Kees Rocks", 40.452451, -80.136219),
    new City ("McKees Rocks", 40.492139, -80.095504),
    new City ("North Versailles", 40.374532, -79.82477),
    new City ("Phenix", 37.08534, -78.746229),
    new City ("Saxe", 36.888161, -78.564819),
    new City ("Skipwith", 36.708937, -78.540888),
    new City ("South Hill", 36.689126, -78.236776),
    new City ("Victoria", 36.982655, -78.238507),
    new City ("Staunton", 38.15, -79.0727),
    new City ("Roanoke", 37.342604, -79.859586),
    new City ("Roanoke", 37.260728, -79.921571),
    new City ("Roanoke", 37.244568, -79.952163),
    new City ("Olivia", 35.359563, -79.094085),
    new City ("Orrum", 34.46424, -79.009473),
    new City ("Parkton", 34.903875, -79.006314),
    new City ("Lumberton", 34.6801, -79.1943),
    new City ("Pembroke", 34.678144, -79.194357),
    new City ("Pinehurst", 35.210909, -79.483979),
    new City ("Raeford", 34.994579, -79.087497),
    new City ("Red Springs", 34.914944, -79.264836),
    new City ("Rockingham", 34.954242, -79.790394),
    new City ("Roseboro", 34.89448, -78.580797),
    new City ("Rowland", 34.53384, -79.29744),
    new City ("St Pauls", 34.8075, -78.962082),
    new City ("Tampa", 28.079421, -82.579957),
    new City ("Tampa", 27.927688, -82.51744),
    new City ("Tampa", 28.013187, -82.559734),
    new City ("Tampa", 28.038171, -82.612516),
    new City ("Tampa", 28.140915, -82.329947),
    new City ("New Port Richey", 0, 0),
    new City ("St Petersburg", 27.775132, -82.644041),
    new City ("St Petersburg", 27.838219, -82.66139),
    new City ("St Petersburg", 27.827156, -82.656271),
    new City ("St Petersburg", 27.803494, -82.633059),
    new City ("St Petersburg", 27.714696, -82.645458),
    new City ("St Petersburg", 27.767238, -82.716828),
    new City ("Gulfport", 27.761657, -82.710968),
    new City ("South Pasadena", 27.760653, -82.732391),
    new City ("Madeira Beach", 27.80857, -82.790684),
    new City ("St Petersburg", 27.820026, -82.724773),
    new City ("St Petersburg", 27.788045, -82.741437),
    new City ("St Petersburg", 27.764907, -82.690519),
    new City ("St Petersburg", 27.71593, -82.661987),
    new City ("St Petersburg", 27.78507, -82.696509),
    new City ("St Petersburg", 27.825586, -82.687358),
    new City ("Clearwater", 27.976363, -82.786585),
    new City ("Clearwater", 27.950814, -82.788591),
    new City ("Largo", 0, 0),
    new City ("Clearwater", 27.969868, -82.720675),
    new City ("Clearwater", 27.909701, -82.71445),
    new City ("Clearwater", 28.023318, -82.711579),
    new City ("Clearwater", 27.903552, -82.699366),
    new City ("Clearwater", 28.0148, -82.7424),
    new City ("Clearwater", 27.930111, -82.74591),
    new City ("Clearwater", 27.966209, -82.761066),
    new City ("Largo", 27.919862, -82.785958),
    new City ("Largo", 27.908217, -82.784275),
    new City ("Seminole", 27.831038, -82.781958),
    new City ("Largo", 27.877981, -82.725866),
    new City ("Largo", 27.88485, -82.831841),
    new City ("Seminole", 27.852502, -82.814642),
    new City ("Seminole", 27.852825, -82.75393),
    new City ("Largo", 27.89933, -82.802352),
    new City ("Pinellas Park", 27.831491, -82.732391),
    new City ("Pinellas Park", 27.863803, -82.733891),
    new City ("Lakeland", 28.035944, -81.93887),
    new City ("Lakeland", 28.011856, -81.964294),
    new City ("Lakeland", 28.082941, -81.960738),
    new City ("Findlay", 41.041254, -83.668926),
    new City ("Ft Jennings", 40.905952, -84.299294),
    new City ("Ft Loramie", 40.351125, -84.37027),
    new City ("Ft Recovery", 40.407862, -84.771454),
    new City ("Glandorf", 41.030652, -84.079456),
    new City ("Grover Hill", 41.019472, -84.479118),
    new City ("Harrod", 40.733693, -83.933109),
    new City ("Haviland", 41.047112, -84.574539),
    new City ("Kalida", 40.98323, -84.19725),
    new City ("Leipsic", 41.098568, -83.990779),
    new City ("McComb", 41.103965, -83.793107),
    new City ("McGuffey", 40.691748, -83.78706),
    new City ("Maria Stein", 40.406875, -84.495477),
    new City ("Miller City", 41.104649, -84.128647),
    new City ("Minster", 40.402353, -84.380243),
    new City ("Mt Blanchard", 40.866752, -83.518078),
    new City ("Red Lodge", 45.183689, -109.24859),
    new City ("Reed Point", 45.706845, -109.543774),
    new City ("Roberts", 45.361262, -109.165262),
    new City ("Roundup", 46.447287, -108.544153),
    new City ("Ryegate", 46.296457, -109.257862),
    new City ("Sand Springs", 47.100095, -107.489214),
    new City ("Shawmut", 46.346964, -109.522656),
    new City ("Shepherd", 45.94164, -108.343745),
    new City ("Springdale", 45.738113, -110.224215),
    new City ("Wilsall", 45.9908, -110.662),
    new City ("Winnett", 47.001775, -108.352721),
    new City ("Worden", 45.960129, -108.163865),
    new City ("Sumner", 40.950136, -99.506673),
    new City ("Taylor", 41.767833, -99.384574),
    new City ("Wolbach", 41.396491, -98.391483),
    new City ("Wood River", 40.831292, -98.60487),
    new City ("Hastings", 40.585871, -98.439264),
    new City ("Hastings", 40.569523, -98.460303),
    new City ("Alma", 40.103312, -99.361219),
    new City ("Arapahoe", 40.308917, -99.895805),
    new City ("Axtell", 40.480705, -99.12525),
    new City ("Ayr", 40.436692, -98.442442),
    new City ("Beaver City", 40.132417, -99.829864),
    new City ("Bertrand", 40.522416, -99.632293),
    new City ("Snyder", 34.65607, -98.954714),
    new City ("Sterling", 34.745178, -98.172153),
    new City ("Temple", 34.266887, -98.237476),
    new City ("Terral", 33.897145, -97.936136),
    new City ("Tipton", 34.496719, -99.140446),
    new City ("Walters", 34.354072, -98.309093),
    new City ("Waurika", 34.17012, -97.985061),
    new City ("Clinton", 35.503739, -98.983918),
    new City ("Arapaho", 35.579599, -98.967031),
    new City ("Burns Flat", 35.360724, -99.17135),
    new City ("Canute", 35.417524, -99.282857),
    new City ("Cheyenne", 35.6082, -99.665777),
    new City ("Cordell", 35.294275, -98.982315),
    new City ("Elk City", 35.420696, -99.435742),
    new City ("Erick", 35.213615, -99.873518),
    new City ("Aurora", 39.671011, -104.812184),
    new City ("Aurora", 39.621752, -104.736383),
    new City ("Centennial", 39.618642, -104.779083),
    new City ("Centennial", 39.579387, -104.757165),
    new City ("Aurora", 39.591872, -104.746772),
    new City ("Aurora", 39.691983, -104.785421),
    new City ("Aurora", 39.690818, -104.710248),
    new City ("Aurora", 39.808843, -104.756289),
    new City ("Broomfield", 39.930568, -105.059277),
    new City ("Westminster", 39.895897, -105.063313),
    new City ("Broomfield", 39.877249, -105.084679),
    new City ("Westminster", 39.860907, -105.097639),
    new City ("Broomfield", 39.877125, -105.085263),
    new City ("Commerce City", 39.822562, -104.922098),
    new City ("Broomfield", 39.992083, -105.014407),
    new City ("Lafayette", 39.986277, -105.112604),
    new City ("Louisville", 39.97524, -105.138733),
    new City ("Superior", 39.937466, -105.156625),
    new City ("Westminster", 39.828013, -105.030088),
    new City ("Westminster", 39.911475, -105.033546),
    new City ("Wheat Ridge", 39.771422, -105.107474),
    new City ("Agate", 39.46249, -103.941652),
    new City ("Bennett", 39.759097, -104.422577),
    new City ("Byers", 39.70791, -104.2151),
    new City ("Cleveland", 39.348156, -110.854357),
    new City ("Ferron", 39.091201, -111.134869),
    new City ("Green River", 38.992432, -110.158898),
    new City ("Helper", 39.692559, -110.86423),
    new City ("Huntington", 39.33628, -110.973206),
    new City ("La Sal", 38.312856, -109.252184),
    new City ("Moab", 38.568339, -109.543644),
    new City ("Lake Powell", 37.525406, -110.708287),
    new City ("Montezuma Creek", 37.266525, -109.311636),
    new City ("Monticello", 37.87031, -109.3466),
    new City ("Monument Valley", 37.01056, -110.24278),
    new City ("Orangeville", 39.225155, -111.051852),
    new City ("Newhall", 34.383591, -118.536564),
    new City ("Northridge", 34.237459, -118.540773),
    new City ("Northridge", 34.254422, -118.51501),
    new City ("Northridge", 34.267545, -118.548974),
    new City ("Pacoima", 34.270358, -118.40569),
    new City ("Arleta", 34.247514, -118.438161),
    new City ("Pacomia", 34.232927, -118.429457),
    new City ("Reseda", 34.21269, -118.5416),
    new City ("Northridge", 34.220798, -118.533051),
    new City ("Los Angeles", 34.214322, -118.527533),
    new City ("San Fernando", 34.302114, -118.429707),
    new City ("Lake View Terrace", 34.277343, -118.364126),
    new City ("Sylmar", 34.300365, -118.44758),
    new City ("Lake View Terrace", 34.280602, -118.390743),
    new City ("Lakeview Terrace", 34.279442, -118.38286),
    new City ("North Hills", 34.238896, -118.479586),
    new City ("Sepulveda", 34.226763, -118.465641),
    new City ("Granada Hills", 34.274267, -118.488017),
    new City ("Mission Hills", 34.262407, -118.457782),
    new City ("Santa Clarita", 34.411036, -118.513689),
    new City ("Saugus", 34.472148, -118.523185),
    new City ("Canyon Country", 34.426375, -118.475851),
    new City ("Santa Clarita", 34.40869, -118.484391),
    new City ("Sun Valley", 34.221663, -118.405334),
    new City ("Igiugig", 59.325705, -155.904648),
    new City ("King Salmon", 58.6901, -156.6406),
    new City ("Kipnuk", 59.936533, -164.038046),
    new City ("Kodiak", 57.821445, -152.365127),
    new City ("Akhiok", 56.968356, -154.188118),
    new City ("Chiniak", 57.61587, -152.202861),
    new City ("Kotlik", 63.032063, -163.554793),
    new City ("Kwethluk", 60.81019, -161.4293),
    new City ("Kwigillingok", 59.876758, -163.161634),
    new City ("Larsen Bay", 57.54, -153.9786),
    new City ("Levelock", 59.325705, -155.904648),
    new City ("Lower Kalskag", 61.532191, -160.34639),
    new City ("McGrath", 62.95358, -155.59625),
    new City ("Manokotak", 59.041529, -158.471242),
    new City ("Mekoryuk", 60.389167, -166.206944),
    new City ("Moose Pass", 60.48677, -149.368908),
    new City ("Mountain Village", 62.089386, -163.725683),
    new City ("Naknek", 58.733307, -157.004582),
    new City ("Napakiak", 60.694311, -161.972502),
    new City ("Napaskiak", 60.707436, -161.764958),
    new City ("Nikiski", 60.681943, -151.238462),
    new City ("New Stuyahok", 59.450148, -157.312422),
    new City ("Toksook Bay", 60.5327, -165.1091),
    new City ("Nikolski", 52.941188, -168.861325),
    new City ("Ninilchik", 60.043663, -151.673997),
    new City ("Nondalton", 59.9698, -154.8501),
    new City ("Nunapitchuk", 60.894332, -162.454441),
    new City ("Old Harbor", 56.83998, -153.93663),
    new City ("Ouzinkie", 57.92361, -152.50222),
    new City ("Palmer", 61.605179, -149.137348),
    new City ("Wasilla", 61.530739, -149.502199),
    new City ("Palmer", 61.59168, -149.16792),
    new City ("Pedro Bay", 59.784419, -154.099027),
    new City ("Perryville", 55.913372, -159.157716),
    new City ("Pilot Point", 57.557649, -157.572657),
    new City ("Pilot Station", 61.936532, -162.887972),
    new City ("Platinum", 59.0103, -161.8161),
    new City ("Big Lake", 61.590054, -149.769634),
    new City ("Port Alsworth", 60.195034, -154.328444),
    new City ("Wasilla", 61.57983, -149.4352),
    new City ("Meadow Lakes", 61.58183, -149.63215),
    new City ("Quinhagak", 59.751095, -161.897716),
    new City ("Russian Mission", 61.788175, -161.326122),
    new City ("St Mary ", 62.032001, -163.28721),
    new City ("St Michael", 63.47809, -162.044473),
    new City ("St Paul", 57.125898, -170.283094),
    new City ("Sand Point", 55.351546, -160.475841),
    new City ("Scammon Bay", 61.842, -165.5802),
    new City ("Seldovia", 59.442217, -151.713651),
    new City ("Seward", 60.132594, -149.435911),
    new City ("Shageluk", 62.655498, -159.528651),
    new City ("Sheldon Point", 62.530881, -164.850411),
    new City ("Sleetmute", 61.702171, -157.170569),
    new City ("Soldotna", 60.492076, -151.068568),
    new City ("Stebbins", 63.521885, -162.289055),
    new City ("Sterling", 60.536257, -150.797117),
    new City ("Sutton", 61.797805, -147.780101),
    new City ("Takotna", 62.988611, -156.064167),
    new City ("Talkeetna", 62.131328, -150.043732),
    new City ("Tatitlek", 60.872639, -146.679487),
    new City ("Togiak", 59.061944, -160.376389),
    new City ("Tuluksak", 61.1001, -160.961),
    new City ("Tuntutuliak", 60.342702, -162.663382),
    new City ("Tununak", 60.585689, -165.250446),
    new City ("Tyonek", 61.068054, -151.143588),
    new City ("Trapper Creek", 62.316616, -150.231401),
    new City ("Unalakleet", 63.875946, -160.795297),
    new City ("Unalaska", 53.872561, -166.529368),
    new City ("Valdez", 61.138099, -146.359316),
    new City ("Wasilla", 61.539604, -149.613449),
    new City ("Willow", 61.743099, -150.04446),
    new City ("Yakutat", 59.546436, -139.723558),
    new City ("Nightmute", 60.476915, -164.722583),
    new City ("Nikolai", 62.51693, -154.708224),
    new City ("Whittier", 60.771631, -148.68622),
    new City ("Houston", 61.586852, -149.772397),
    new City ("Fairbanks", 64.81243, -147.768486),
    new City ("Eielson Afb", 64.67414, -147.071636),
    new City ("Ft Wainwright", 64.826946, -147.690896),
    new City ("Fairbanks", 64.80465, -147.412831),
    new City ("North Pole", 64.746564, -147.36948),
    new City ("Fairbanks", 64.845684, -147.846334),
    new City ("Allakaket", 66.563715, -152.64494),
    new City ("Anaktuvuk Pass", 68.147183, -151.722025),
    new City ("Arctic Village", 68.125533, -145.536892),
    new City ("Barrow", 71.298478, -156.743762),
    new City ("Beaver", 66.360047, -147.397644),
    new City ("Buckland", 65.977837, -161.123247),
    new City ("Cantwell", 63.393993, -148.887285),
    new City ("Central", 65.571871, -144.803636),
    new City ("Ft Greely", 63.968177, -145.722734),
    new City ("Circle", 65.8255, -144.0732),
    new City ("Deering", 66.074683, -162.735115),
    new City ("Dot Lake", 63.659187, -144.065357),
    new City ("Delta Junction", 64.043052, -145.714025),
    new City ("Eagle", 64.788, -141.2),
    new City ("Elim", 64.615038, -162.266601),
    new City ("Ft Yukon", 66.564498, -145.252648),
    new City ("Galena", 64.757576, -156.867395),
    new City ("Gambell", 63.77751, -171.714711),
    new City ("Healy", 63.872984, -149.013975),
    new City ("Anderson", 64.34316, -149.18959),
    new City ("Hughes", 66.041154, -154.257003),
    new City ("Huslia", 65.6967, -156.3655),
    new City ("Kaktovik", 70.127419, -143.616203),
    new City ("Kaltag", 64.3327, -158.7059),
    new City ("Kiana", 66.970883, -160.443677),
    new City ("Kivalina", 67.725887, -164.535283),
    new City ("Kobuk", 66.908616, -156.882104),
    new City ("Kotzebue", 66.902207, -162.58468),
    new City ("Koyuk", 64.9312, -161.1594),
    new City ("Koyukuk", 64.881379, -157.703453),
    new City ("Manley Hot Springs", 65.020007, -150.504725),
    new City ("Minto", 65.150208, -149.341087),
    new City ("Point Lay", 69.742211, -163.007357),
    new City ("Nenana", 64.561776, -149.088866),
    new City ("Noatak", 67.565719, -162.972402),
    new City ("Golovin", 64.545297, -163.035514),
    new City ("Diomede", 65.757994, -168.932235),
    new City ("Nome", 64.497876, -165.383327),
    new City ("Noorvik", 66.833074, -161.04253),
    new City ("Northway", 62.961667, -141.937222),
    new City ("Nulato", 64.717908, -158.111888),
    new City ("Point Hope", 68.347456, -166.785874),
    new City ("Ruby", 64.736067, -155.482923),
    new City ("Savoonga", 63.695674, -170.4769),
    new City ("Selawik", 66.604518, -160.010993),
    new City ("Shaktoolik", 64.333889, -161.153889)
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
//var midWestCities = [
//    new City ("Minneapolis", 44.97, -93.26, true),
//    new City ("Madison",43.07, -89.4, false),
//    new City ("Milwaukee", 43.05, -87.95, false)
//];
//
//var caliCities = [
//    new City ("San Francisco", 37.7833, -122.4167, false),
//    new City ("Sacramento", 38.5556, -121.4689, false),
//    new City ("Fresno", 36.7500, -119.7667, true)];
//
//var eastCities = [
//    new City ("Stamford", 41.0528, -73.5389, true),
//    new City ("New Haven", 41.3100, -72.9236, false),
//    new City ("Providence", 41.8236, -71.4222, false)];
//
var map;
var points = 0;
var customMapType;
var customMapTypeId = "custom_style";

var chooseAmong;
var playThisMany;
var randArray = [];

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
    }
    //And create the map, with the options specified
    map = new google.maps.Map(mapDiv, mapOptions);

    // Add the custom style features
    map.mapTypes.set(customMapTypeId, customMapType);
    map.setMapTypeId(customMapTypeId);

    //var playMidWest = document.getElementById("midWestButton");
    //playMidWest.addEventListener("click", function () {
    //    makeMarkers(midWestCities);
    //    didYouWin(midWestCities)});
    //
    //var playCali = document.getElementById("caliButton");
    //playCali.addEventListener("click", function () {
    //    makeMarkers(caliCities);
    //    didYouWin(caliCities)});
    //
    //var playEast = document.getElementById("eastButton");
    //playEast.addEventListener("click", function () {
    //    makeMarkers(eastCities);
    //    didYouWin(eastCities)});

    var play = document.getElementById("playButton");
    play.addEventListener("click", function () {
        chooseAmong = document.getElementById("numCities").value;
        playThisMany = document.getElementById("numGames").value;

        makeMarkers();
    });




    var getScore = document.getElementById("gameOver");
    getScore.addEventListener("click", function () {
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

function makeMarkers() {

    getRanNum(chooseAmong);

    // the following is from Clara's week 4 examples - I have modified to work with passed array and added some fields to Marker prototype through cityOptions that will be applied to creation of cityMarker

    //Can add features, points of interest, routes, lines etc. to maps
    //Adding a marker to the map
    //Like the map, set the options for the marker
    for (var i = 0; i < chooseAmong; i++) {
        console.log(randArray[i]);
        var cityOptions = {
            position: new google.maps.LatLng(BIG_ARRAY[randArray[i]].lat, BIG_ARRAY[randArray[i]].long), //Where?
            map: map,                       //What map?
            draggable: false,               //No moving the marker!
            name: BIG_ARRAY[i].name         //Name for checking in game ????
        };

        //Create the marker, with the options above
        //A new marker with the map option set is automatically added to
        //the map it belongs to.
        BIG_ARRAY[i].cityMarker = new google.maps.Marker(cityOptions);
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

function getRanNum(num) {
    var rndNum;
    rndNum = Math.floor(Math.random() * 500);
    console.log(rndNum);
    randArray.push(rndNum);
    rndNum = Math.floor(Math.random() * 500);
    for (var i = 1; i < num; i++){
        while (randArray.indexOf(rndNum) != -1) {
            console.log(rndNum);
            rndNum = Math.floor(Math.random() * 500);
        }
        randArray.push(rndNum);
        rndNum = Math.floor(Math.random() * 500);
    }
}