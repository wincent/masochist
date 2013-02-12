---
tags: 
---

The following program can be used:

    #import <Foundation/Foundation.h>

    int main(int argc, const char *argv[])
    {
        NSString *timeZoneInformation = (NSString *)CFTimeZoneCopyKnownNames();
        NSLog(@"timeZoneInformation: %@", timeZoneInformation);
        return 0;
    }

Place the source code in a file called `timezone.m` and compile it an execute it:

    gcc timezones.m -framework Foundation
    ./a.out

Output on my system ([Mac OS X](/wiki/Mac_OS_X) 10.4.8) is as follows:

    2006-11-06 18:25:32.228 a.out[2300] timeZoneInformation: (
        "+VERSION", 
        "Africa/Abidjan", 
        "Africa/Accra", 
        "Africa/Addis_Ababa", 
        "Africa/Algiers", 
        "Africa/Asmera", 
        "Africa/Bamako", 
        "Africa/Bangui", 
        "Africa/Banjul", 
        "Africa/Bissau", 
        "Africa/Blantyre", 
        "Africa/Brazzaville", 
        "Africa/Bujumbura", 
        "Africa/Cairo", 
        "Africa/Casablanca", 
        "Africa/Ceuta", 
        "Africa/Conakry", 
        "Africa/Dakar", 
        "Africa/Dar_es_Salaam", 
        "Africa/Djibouti", 
        "Africa/Douala", 
        "Africa/El_Aaiun", 
        "Africa/Freetown", 
        "Africa/Gaborone", 
        "Africa/Harare", 
        "Africa/Johannesburg", 
        "Africa/Kampala", 
        "Africa/Khartoum", 
        "Africa/Kigali", 
        "Africa/Kinshasa", 
        "Africa/Lagos", 
        "Africa/Libreville", 
        "Africa/Lome", 
        "Africa/Luanda", 
        "Africa/Lubumbashi", 
        "Africa/Lusaka", 
        "Africa/Malabo", 
        "Africa/Maputo", 
        "Africa/Maseru", 
        "Africa/Mbabane", 
        "Africa/Mogadishu", 
        "Africa/Monrovia", 
        "Africa/Nairobi", 
        "Africa/Ndjamena", 
        "Africa/Niamey", 
        "Africa/Nouakchott", 
        "Africa/Ouagadougou", 
        "Africa/Porto-Novo", 
        "Africa/Sao_Tome", 
        "Africa/Timbuktu", 
        "Africa/Tripoli", 
        "Africa/Tunis", 
        "Africa/Windhoek", 
        "America/Adak", 
        "America/Anchorage", 
        "America/Anguilla", 
        "America/Antigua", 
        "America/Araguaina", 
        "America/Argentina/Buenos_Aires", 
        "America/Argentina/Catamarca", 
        "America/Argentina/ComodRivadavia", 
        "America/Argentina/Cordoba", 
        "America/Argentina/Jujuy", 
        "America/Argentina/La_Rioja", 
        "America/Argentina/Mendoza", 
        "America/Argentina/Rio_Gallegos", 
        "America/Argentina/San_Juan", 
        "America/Argentina/Tucuman", 
        "America/Argentina/Ushuaia", 
        "America/Aruba", 
        "America/Asuncion", 
        "America/Bahia", 
        "America/Barbados", 
        "America/Belem", 
        "America/Belize", 
        "America/Boa_Vista", 
        "America/Bogota", 
        "America/Boise", 
        "America/Buenos_Aires", 
        "America/Cambridge_Bay", 
        "America/Campo_Grande", 
        "America/Cancun", 
        "America/Caracas", 
        "America/Catamarca", 
        "America/Cayenne", 
        "America/Cayman", 
        "America/Chicago", 
        "America/Chihuahua", 
        "America/Coral_Harbour", 
        "America/Cordoba", 
        "America/Costa_Rica", 
        "America/Cuiaba", 
        "America/Curacao", 
        "America/Danmarkshavn", 
        "America/Dawson", 
        "America/Dawson_Creek", 
        "America/Denver", 
        "America/Detroit", 
        "America/Dominica", 
        "America/Edmonton", 
        "America/Eirunepe", 
        "America/El_Salvador", 
        "America/Fortaleza", 
        "America/Glace_Bay", 
        "America/Godthab", 
        "America/Goose_Bay", 
        "America/Grand_Turk", 
        "America/Grenada", 
        "America/Guadeloupe", 
        "America/Guatemala", 
        "America/Guayaquil", 
        "America/Guyana", 
        "America/Halifax", 
        "America/Havana", 
        "America/Hermosillo", 
        "America/Indiana/Knox", 
        "America/Indiana/Marengo", 
        "America/Indiana/Petersburg", 
        "America/Indiana/Vevay", 
        "America/Indiana/Vincennes", 
        "America/Indianapolis", 
        "America/Inuvik", 
        "America/Iqaluit", 
        "America/Jamaica", 
        "America/Jujuy", 
        "America/Juneau", 
        "America/Kentucky/Monticello", 
        "America/La_Paz", 
        "America/Lima", 
        "America/Los_Angeles", 
        "America/Louisville", 
        "America/Maceio", 
        "America/Managua", 
        "America/Manaus", 
        "America/Martinique", 
        "America/Mazatlan", 
        "America/Mendoza", 
        "America/Menominee", 
        "America/Merida", 
        "America/Mexico_City", 
        "America/Miquelon", 
        "America/Moncton", 
        "America/Monterrey", 
        "America/Montevideo", 
        "America/Montreal", 
        "America/Montserrat", 
        "America/Nassau", 
        "America/New_York", 
        "America/Nipigon", 
        "America/Nome", 
        "America/Noronha", 
        "America/North_Dakota/Center", 
        "America/Panama", 
        "America/Pangnirtung", 
        "America/Paramaribo", 
        "America/Phoenix", 
        "America/Port-au-Prince", 
        "America/Port_of_Spain", 
        "America/Porto_Velho", 
        "America/Puerto_Rico", 
        "America/Rainy_River", 
        "America/Rankin_Inlet", 
        "America/Recife", 
        "America/Regina", 
        "America/Rio_Branco", 
        "America/Santiago", 
        "America/Santo_Domingo", 
        "America/Sao_Paulo", 
        "America/Scoresbysund", 
        "America/St_Johns", 
        "America/St_Kitts", 
        "America/St_Lucia", 
        "America/St_Thomas", 
        "America/St_Vincent", 
        "America/Swift_Current", 
        "America/Tegucigalpa", 
        "America/Thule", 
        "America/Thunder_Bay", 
        "America/Tijuana", 
        "America/Toronto", 
        "America/Tortola", 
        "America/Vancouver", 
        "America/Whitehorse", 
        "America/Winnipeg", 
        "America/Yakutat", 
        "America/Yellowknife", 
        "Antarctica/Casey", 
        "Antarctica/Davis", 
        "Antarctica/DumontDUrville", 
        "Antarctica/Mawson", 
        "Antarctica/McMurdo", 
        "Antarctica/Palmer", 
        "Antarctica/Rothera", 
        "Antarctica/Syowa", 
        "Antarctica/Vostok", 
        "Arctic/Longyearbyen", 
        "Asia/Aden", 
        "Asia/Almaty", 
        "Asia/Amman", 
        "Asia/Anadyr", 
        "Asia/Aqtau", 
        "Asia/Aqtobe", 
        "Asia/Ashgabat", 
        "Asia/Baghdad", 
        "Asia/Bahrain", 
        "Asia/Baku", 
        "Asia/Bangkok", 
        "Asia/Beirut", 
        "Asia/Bishkek", 
        "Asia/Brunei", 
        "Asia/Calcutta", 
        "Asia/Choibalsan", 
        "Asia/Chongqing", 
        "Asia/Colombo", 
        "Asia/Dacca", 
        "Asia/Damascus", 
        "Asia/Dhaka", 
        "Asia/Dili", 
        "Asia/Dubai", 
        "Asia/Dushanbe", 
        "Asia/Gaza", 
        "Asia/Harbin", 
        "Asia/Hong_Kong", 
        "Asia/Hovd", 
        "Asia/Irkutsk", 
        "Asia/Istanbul", 
        "Asia/Jakarta", 
        "Asia/Jayapura", 
        "Asia/Jerusalem", 
        "Asia/Kabul", 
        "Asia/Kamchatka", 
        "Asia/Karachi", 
        "Asia/Kashgar", 
        "Asia/Katmandu", 
        "Asia/Krasnoyarsk", 
        "Asia/Kuala_Lumpur", 
        "Asia/Kuching", 
        "Asia/Kuwait", 
        "Asia/Macau", 
        "Asia/Magadan", 
        "Asia/Makassar", 
        "Asia/Manila", 
        "Asia/Muscat", 
        "Asia/Nicosia", 
        "Asia/Novosibirsk", 
        "Asia/Omsk", 
        "Asia/Oral", 
        "Asia/Phnom_Penh", 
        "Asia/Pontianak", 
        "Asia/Pyongyang", 
        "Asia/Qatar", 
        "Asia/Qyzylorda", 
        "Asia/Rangoon", 
        "Asia/Riyadh", 
        "Asia/Riyadh87", 
        "Asia/Riyadh88", 
        "Asia/Riyadh89", 
        "Asia/Saigon", 
        "Asia/Sakhalin", 
        "Asia/Samarkand", 
        "Asia/Seoul", 
        "Asia/Shanghai", 
        "Asia/Singapore", 
        "Asia/Taipei", 
        "Asia/Tashkent", 
        "Asia/Tbilisi", 
        "Asia/Tehran", 
        "Asia/Thimphu", 
        "Asia/Tokyo", 
        "Asia/Ulaanbaatar", 
        "Asia/Urumqi", 
        "Asia/Vientiane", 
        "Asia/Vladivostok", 
        "Asia/Yakutsk", 
        "Asia/Yekaterinburg", 
        "Asia/Yerevan", 
        "Atlantic/Azores", 
        "Atlantic/Bermuda", 
        "Atlantic/Canary", 
        "Atlantic/Cape_Verde", 
        "Atlantic/Faeroe", 
        "Atlantic/Jan_Mayen", 
        "Atlantic/Madeira", 
        "Atlantic/Reykjavik", 
        "Atlantic/South_Georgia", 
        "Atlantic/St_Helena", 
        "Atlantic/Stanley", 
        "Australia/Adelaide", 
        "Australia/Brisbane", 
        "Australia/Broken_Hill", 
        "Australia/Canberra", 
        "Australia/Currie", 
        "Australia/Darwin", 
        "Australia/Hobart", 
        "Australia/Lindeman", 
        "Australia/Lord_Howe", 
        "Australia/Melbourne", 
        "Australia/Perth", 
        "Australia/Sydney", 
        "Brazil/East", 
        "Canada/Atlantic", 
        "Canada/Eastern", 
        "Canada/Mountain", 
        "Canada/Newfoundland", 
        "Canada/Saskatchewan", 
        CET, 
        EET, 
        EST, 
        "Etc/GMT", 
        "Etc/GMT+1", 
        "Etc/GMT+10", 
        "Etc/GMT+11", 
        "Etc/GMT+12", 
        "Etc/GMT+2", 
        "Etc/GMT+3", 
        "Etc/GMT+4", 
        "Etc/GMT+5", 
        "Etc/GMT+6", 
        "Etc/GMT+7", 
        "Etc/GMT+8", 
        "Etc/GMT+9", 
        "Etc/GMT-1", 
        "Etc/GMT-10", 
        "Etc/GMT-11", 
        "Etc/GMT-12", 
        "Etc/GMT-13", 
        "Etc/GMT-14", 
        "Etc/GMT-2", 
        "Etc/GMT-3", 
        "Etc/GMT-4", 
        "Etc/GMT-5", 
        "Etc/GMT-6", 
        "Etc/GMT-7", 
        "Etc/GMT-8", 
        "Etc/GMT-9", 
        "Etc/UCT", 
        "Etc/UTC", 
        "Europe/Amsterdam", 
        "Europe/Andorra", 
        "Europe/Athens", 
        "Europe/Belfast", 
        "Europe/Belgrade", 
        "Europe/Berlin", 
        "Europe/Bratislava", 
        "Europe/Brussels", 
        "Europe/Bucharest", 
        "Europe/Budapest", 
        "Europe/Chisinau", 
        "Europe/Copenhagen", 
        "Europe/Dublin", 
        "Europe/Gibraltar", 
        "Europe/Helsinki", 
        "Europe/Istanbul", 
        "Europe/Kaliningrad", 
        "Europe/Kiev", 
        "Europe/Lisbon", 
        "Europe/Ljubljana", 
        "Europe/London", 
        "Europe/Luxembourg", 
        "Europe/Madrid", 
        "Europe/Malta", 
        "Europe/Mariehamn", 
        "Europe/Minsk", 
        "Europe/Monaco", 
        "Europe/Moscow", 
        "Europe/Oslo", 
        "Europe/Paris", 
        "Europe/Prague", 
        "Europe/Riga", 
        "Europe/Rome", 
        "Europe/Samara", 
        "Europe/San_Marino", 
        "Europe/Sarajevo", 
        "Europe/Simferopol", 
        "Europe/Skopje", 
        "Europe/Sofia", 
        "Europe/Stockholm", 
        "Europe/Tallinn", 
        "Europe/Tirane", 
        "Europe/Uzhgorod", 
        "Europe/Vaduz", 
        "Europe/Vatican", 
        "Europe/Vienna", 
        "Europe/Vilnius", 
        "Europe/Warsaw", 
        "Europe/Zagreb", 
        "Europe/Zaporozhye", 
        "Europe/Zurich", 
        GMT, 
        HST, 
        "Indian/Antananarivo", 
        "Indian/Chagos", 
        "Indian/Christmas", 
        "Indian/Cocos", 
        "Indian/Comoro", 
        "Indian/Kerguelen", 
        "Indian/Mahe", 
        "Indian/Maldives", 
        "Indian/Mauritius", 
        "Indian/Mayotte", 
        "Indian/Reunion", 
        "iso3166.tab", 
        Japan, 
        MET, 
        MST, 
        "Pacific/Apia", 
        "Pacific/Auckland", 
        "Pacific/Chatham", 
        "Pacific/Easter", 
        "Pacific/Efate", 
        "Pacific/Enderbury", 
        "Pacific/Fakaofo", 
        "Pacific/Fiji", 
        "Pacific/Funafuti", 
        "Pacific/Galapagos", 
        "Pacific/Gambier", 
        "Pacific/Guadalcanal", 
        "Pacific/Guam", 
        "Pacific/Honolulu", 
        "Pacific/Johnston", 
        "Pacific/Kiritimati", 
        "Pacific/Kosrae", 
        "Pacific/Kwajalein", 
        "Pacific/Majuro", 
        "Pacific/Marquesas", 
        "Pacific/Midway", 
        "Pacific/Nauru", 
        "Pacific/Niue", 
        "Pacific/Norfolk", 
        "Pacific/Noumea", 
        "Pacific/Pago_Pago", 
        "Pacific/Palau", 
        "Pacific/Pitcairn", 
        "Pacific/Ponape", 
        "Pacific/Port_Moresby", 
        "Pacific/Rarotonga", 
        "Pacific/Saipan", 
        "Pacific/Tahiti", 
        "Pacific/Tarawa", 
        "Pacific/Tongatapu", 
        "Pacific/Truk", 
        "Pacific/Wake", 
        "Pacific/Wallis", 
        "Pacific/Yap", 
        posixrules, 
        "US/Central", 
        "US/Eastern", 
        "US/Mountain", 
        "US/Pacific", 
        UTC, 
        WET, 
        "zone.tab"
    )

# See also

-   <http://developer.apple.com/documentation/Cocoa/Conceptual/DatesAndTimes/Articles/dtTimeZones.html>
