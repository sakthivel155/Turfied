import SearchContainer from "./book-page/Searchcontainer"
import Footer from '../components/Footer'

import { TurfCard } from "./book-page/TurfCard";
export const turfs = [
    {
        turf_id   : 0,
        turf_name : "South United Football Club",
        turf_place: "RBANM's Ground",
        turf_area : "Bangalore",
        turf_address: "South United Football Club, RBANM's Grounds, Gate No 3, Gangadhar Chetty Road, near Ulsoor, Bengaluru, Karnataka",
        turf_about: `Football:- It is recommended but not compulsory to wear football studs while playing at the facility.- Metal studs are not allowed.`,
        turf_contactno: "+91 9723454343",
        turf_amenities: ["Parking", "Restroom","Drinking Water","Sitting Stand","First Aid"],
        turf_sports: ["football"],
        turf_imgurl1 : "https://playo.gumlet.io/SPORTSALLEY/SouthUnitedFootballClub1642749273793.jpg",
        turf_distance: 2.4, //km
        turf_avg_rating: 4.5, //rating 
        turf_no_of_rating: 83, //no.of.rate
        turf_openingHours: {
            weekdays: "",
            weekends: "",
            alldays : "6AM - 2AM"
          },
        turf_map:`<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1943.92619824201!2d77.614312!3d12.981291!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae168f738eb82b%3A0xce45df8cc8f4dee5!2sSouth%20United%20Football%20Club!5e0!3m2!1sen!2sus!4v1720444548855!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`  
    },
  {
    turf_id   : 1,
    turf_name : "Tiger 5 Sports Arena - Dairy Circle",
    turf_place: "Bannerghatta Road",
    turf_area : "erode",
    turf_address: "4/1, Bannerghatta Main Road, Bhavani Nagar, S.G. Palya, Bengaluru, Karnataka 560029",
    turf_about: `Football:- It is recommended but not compulsory to wear football studs while playing at the facility.- Metal studs are not allowed.`,
    turf_contactno: "+91 8532554343",
    turf_amenities: ["Parking","Drinking Water","Change Room","First Aid"],
    turf_sports: ["cricket","volleyball","football"],
    turf_imgurl1 : "https://playo.gumlet.io/TIGER5SPORTSDAIRYCIRCLE20221220100139092493/Tiger5SportsDairyCircle1671530923082.jpeg",
    turf_distance: 4.4, //km
    turf_avg_rating: 3.94, //rating 
    turf_no_of_rating: 35, //no.of.rate
    turf_openingHours: {
        weekdays: "",
        weekends: "",
        alldays : "Open 24x7"
      },
    turf_map:`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.611127372997!2d77.60082607494274!3d12.932696887379118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1520474a5d91%3A0x289b30472f37ceee!2sTiger%205%20sports%20-%20Dairy%20circle!5e0!3m2!1sen!2sin!4v1720448931348!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`  
  },
  {
  turf_id   : 2,
  turf_name : "Gabriel Sports Club",
  turf_place: "Hennur Cross",
  turf_area : "Bangalore",
  turf_address: "108/1, 1st cross, Hormavu Agara main road, (landmark: Reliance smart point), Bengaluru- 43",
  turf_about: `Football:- It is recommended but not compulsory to wear football studs while playing at the facility.- Metal studs are not allowed.- Smoking is prohibited within 50 meters of the venue.- Participants are requested to carry their own shoes and water bottles to the venue.`,
  turf_contactno: "+91 945863483",
  turf_amenities: ["Parking","Drinking Water","Change Room","First Aid"],
  turf_sports: ["basketball","cricket","volleyball","football"],
  turf_imgurl1 : "https://playo.gumlet.io/GABRIELSPORTSACADEMY20220226222143463915/GabrielSportsAcademy1645914083397.jpeg?w=700&format=webp&q=30&overlay=https://playo-website.gumlet.io/playo-website-v2/logos-icons/playo-logo.png&overlay_width_pct=0.2&overlay_height_pct=1&overlay_position=bottomright",
  turf_distance: 9.4, //km
  turf_avg_rating: 5.00, //rating 
  turf_no_of_rating: 8, //no.of.rate
  turf_openingHours: {
      weekdays: "",
      weekends: "",
      alldays : "6AM - 11PM"
    },
  turf_map:`<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1943.46651318081!2d77.646141!3d13.039935!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17d58e19953f%3A0x6d18634e85c4a80b!2sGabriel%20Sports%20Club%20%7C%20Coaching%20Football%20Basketball%20%7C%20Dance%20Class%20for%20all%20ages%20%7C%20fitness%20for%20men%20and%20women%20%7C%20Turf%20Rent!5e0!3m2!1sen!2sus!4v1720450663875!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`  
  }, {
  turf_id   : 3,
  turf_name : "BTS Turf Club",
  turf_area : "chennai",
  turf_place: "St Meera School",
  turf_address: "15, Cambridge Road, Near Sri Sai Mandir, Deena Bandu Nagar, Jeevan Kendra Layout, Ulsoor, Domlur, Bengaluru, Karnataka - 560008",
  turf_about: "Football: - It is recommended but not compulsory to wear football studs while playing at the facility.- Metal studs are not allowed.Box Cricket:- Stumps and Bats will be provided by the venue.- Users have to bring their own Cricket Balls.",
  turf_contactno: "+91 9734214553",
  turf_amenities: ["Parking", "Restroom","Drinking Water"],
  turf_sports: ["cricket","football"],
  turf_imgurl1 : "https://playo.gumlet.io/BTSTURFCLUB20240531052641675463/BTSTurfClub1717174026110.jpg?auto=compress,format&h=300",
  turf_distance: 3.7, //km
  turf_avg_rating: 4.20, //rating 
  turf_no_of_rating:10, //no.of.rate
  turf_openingHours: {
    weekdays: "6AM - 9AM & 3PM - 11PM On weekdays",
    weekends: "6AM - 11PM On weekends"
  },
  turf_map:`<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d972.0124225127067!2d77.62850816352373!3d12.968672241538192!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17d0d07c413f%3A0xaa53d0ab0f6822b1!2sSoccerholic%20Bangalore%20I%20Sports%20Arena%2C%20Football%20%26%20Cricket%20Court%20I%20Kids%20%26%20Adults%20Training%20I%20Best%20Sports%20Academy%20in%20Bangalore!5e0!3m2!1sen!2sus!4v1720331140158!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`  
  } ,
  {
  turf_id   : 0,
  turf_name : "South United Football Club",
  turf_place: "RBANM's Ground",
  turf_area : "Bangalore",
  turf_address: "South United Football Club, RBANM's Grounds, Gate No 3, Gangadhar Chetty Road, near Ulsoor, Bengaluru, Karnataka",
  turf_about: `Football:- It is recommended but not compulsory to wear football studs while playing at the facility.- Metal studs are not allowed.`,
  turf_contactno: "+91 9723454343",
  turf_amenities: ["Parking", "Restroom","Drinking Water","Sitting Stand","First Aid"],
  turf_sports: ["football"],
  turf_imgurl1 : "https://playo.gumlet.io/SPORTSALLEY/SouthUnitedFootballClub1642749273793.jpg",
  turf_distance: 2.4, //km
  turf_avg_rating: 4.5, //rating 
  turf_no_of_rating: 83, //no.of.rate
  turf_openingHours: {
  weekdays: "",
  weekends: "",
  alldays : "6AM - 2AM"
  },
  turf_map:`<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1943.92619824201!2d77.614312!3d12.981291!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae168f738eb82b%3A0xce45df8cc8f4dee5!2sSouth%20United%20Football%20Club!5e0!3m2!1sen!2sus!4v1720444548855!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`  
  },
  {
  turf_id   : 1,
  turf_name : "Tiger 5 Sports Arena - Dairy Circle",
  turf_place: "Bannerghatta Road",
  turf_area : "erode",
  turf_address: "4/1, Bannerghatta Main Road, Bhavani Nagar, S.G. Palya, Bengaluru, Karnataka 560029",
  turf_about: `Football:- It is recommended but not compulsory to wear football studs while playing at the facility.- Metal studs are not allowed.`,
  turf_contactno: "+91 8532554343",
  turf_amenities: ["Parking","Drinking Water","Change Room","First Aid"],
  turf_sports: ["cricket","volleyball","football"],
  turf_imgurl1 : "https://playo.gumlet.io/TIGER5SPORTSDAIRYCIRCLE20221220100139092493/Tiger5SportsDairyCircle1671530923082.jpeg",
  turf_distance: 4.4, //km
  turf_avg_rating: 3.94, //rating 
  turf_no_of_rating: 35, //no.of.rate
  turf_openingHours: {
  weekdays: "",
  weekends: "",
  alldays : "Open 24x7"
  },
  turf_map:`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.611127372997!2d77.60082607494274!3d12.932696887379118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1520474a5d91%3A0x289b30472f37ceee!2sTiger%205%20sports%20-%20Dairy%20circle!5e0!3m2!1sen!2sin!4v1720448931348!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`  
  },
  {
  turf_id   : 4,
  turf_name : "Wilson Garden Club",
  turf_place: "Off Hosur Main Road",
  turf_area : "chennai",
  turf_address: "No 35/2, 9th Cross Road, Hombe Gowda Nagara, Wilson Garden, Bengaluru, Karnataka - 560027",
  turf_about: `Badminton:- Non Marking Shoes compulsory for Badminton. Shoes must be worn after entering the facility.- Sports equipment not available on rent.- Barefoot play is strictly prohibited.- A maximum of 4 members per booking per badminton court is admissible.`,
  turf_contactno: "+91 935454343",
  turf_amenities: ["Parking","Drinking Water","Change Room","First Aid"],
  turf_sports: ["tennis"],
  turf_imgurl1 : "https://playo.gumlet.io/BALAJINAGARSHUTTLECOURT/WilsonGardenClub1708877751037.jpg",
  turf_distance: 2.6, //km
  turf_avg_rating: 4.7, //rating 
  turf_no_of_rating: 7, //no.of.rate
  turf_openingHours: {
  weekdays: "",
  weekends: "",
  alldays : "6AM - 10PM"
  },
  turf_map:`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1944.1822264310817!2d77.59486947208647!3d12.948515209114476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c626efd32f%3A0x38bfa60e1102ef0f!2sWilson%20Garden%20Club!5e0!3m2!1sen!2sus!4v1720445194254!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`  
  },
  {
  turf_id   : 5,
  turf_name : "AUK Sports Zone",
  turf_place: "Banagiri Nagara",
  turf_area : "chennai",
  turf_address: "Beside Apollo National Public School, 7 Block, Kathreguppe, Banashankari 3rd Stage, Banashankari, Bengaluru, Karnataka 560085",
  turf_about: `Football:- It is recommended but not compulsory to wear football studs while playing at the facility.- Metal studs are not allowed.`,
  turf_contactno: "+91 9243564942",
  turf_amenities: ["Parking","Drinking Water","Restroom"],
  turf_sports: ["cricket","football","basketball"],
  turf_imgurl1 : "https://playo.gumlet.io/AUKSPORTSZONE20240203093022107518/AUKSportsZone1706952610722.jpeg",
  turf_distance: 6.8, //km
  turf_avg_rating: 2.64, //rating 
  turf_no_of_rating: 11, //no.of.rate
  turf_openingHours: {
  weekdays: "",
  weekends: "",
  alldays : "6AM - 10PM"
  },
  turf_map:`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11595.814405455036!2d77.54860265526936!3d12.924284226103945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f14e6c8c4b7%3A0x3636d11dcfd8963d!2sAUK%20SPORTS%20ZONE!5e0!3m2!1sen!2sin!4v1720452804138!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`  
  },
  {
        turf_id   : 0,
        turf_name : "South United Football Club",
        turf_place: "RBANM's Ground",
        turf_area : "Bangalore",
        turf_address: "South United Football Club, RBANM's Grounds, Gate No 3, Gangadhar Chetty Road, near Ulsoor, Bengaluru, Karnataka",
        turf_about: `Football:- It is recommended but not compulsory to wear football studs while playing at the facility.- Metal studs are not allowed.`,
        turf_contactno: "+91 9723454343",
        turf_amenities: ["Parking", "Restroom","Drinking Water","Sitting Stand","First Aid"],
        turf_sports: ["football"],
        turf_imgurl1 : "https://playo.gumlet.io/SPORTSALLEY/SouthUnitedFootballClub1642749273793.jpg",
        turf_distance: 2.4, //km
        turf_avg_rating: 4.5, //rating 
        turf_no_of_rating: 83, //no.of.rate
        turf_openingHours: {
            weekdays: "",
            weekends: "",
            alldays : "6AM - 2AM"
          },
        turf_map:`<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1943.92619824201!2d77.614312!3d12.981291!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae168f738eb82b%3A0xce45df8cc8f4dee5!2sSouth%20United%20Football%20Club!5e0!3m2!1sen!2sus!4v1720444548855!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`  
    },
  {
    turf_id   : 1,
    turf_name : "Tiger 5 Sports Arena - Dairy Circle",
    turf_place: "Bannerghatta Road",
    turf_area : "erode",
    turf_address: "4/1, Bannerghatta Main Road, Bhavani Nagar, S.G. Palya, Bengaluru, Karnataka 560029",
    turf_about: `Football:- It is recommended but not compulsory to wear football studs while playing at the facility.- Metal studs are not allowed.`,
    turf_contactno: "+91 8532554343",
    turf_amenities: ["Parking","Drinking Water","Change Room","First Aid"],
    turf_sports: ["cricket","volleyball","football"],
    turf_imgurl1 : "https://playo.gumlet.io/TIGER5SPORTSDAIRYCIRCLE20221220100139092493/Tiger5SportsDairyCircle1671530923082.jpeg",
    turf_distance: 4.4, //km
    turf_avg_rating: 3.94, //rating 
    turf_no_of_rating: 35, //no.of.rate
    turf_openingHours: {
        weekdays: "",
        weekends: "",
        alldays : "Open 24x7"
      },
    turf_map:`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.611127372997!2d77.60082607494274!3d12.932696887379118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1520474a5d91%3A0x289b30472f37ceee!2sTiger%205%20sports%20-%20Dairy%20circle!5e0!3m2!1sen!2sin!4v1720448931348!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`  
  },
  {
  turf_id   : 5,
  turf_name : "AUK Sports Zone",
  turf_place: "Banagiri Nagara",
  turf_area : "erode",
  turf_address: "Beside Apollo National Public School, 7 Block, Kathreguppe, Banashankari 3rd Stage, Banashankari, Bengaluru, Karnataka 560085",
  turf_about: `Football:- It is recommended but not compulsory to wear football studs while playing at the facility.- Metal studs are not allowed.`,
  turf_contactno: "+91 9243564942",
  turf_amenities: ["Parking","Drinking Water","Restroom"],
  turf_sports: ["cricket","football","basketball"],
  turf_imgurl1 : "https://playo.gumlet.io/AUKSPORTSZONE20240203093022107518/AUKSportsZone1706952610722.jpeg",
  turf_distance: 6.8, //km
  turf_avg_rating: 2.64, //rating 
  turf_no_of_rating: 11, //no.of.rate
  turf_openingHours: {
  weekdays: "",
  weekends: "",
  alldays : "6AM - 10PM"
  },
  turf_map:`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11595.814405455036!2d77.54860265526936!3d12.924284226103945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f14e6c8c4b7%3A0x3636d11dcfd8963d!2sAUK%20SPORTS%20ZONE!5e0!3m2!1sen!2sin!4v1720452804138!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`  
  },
  {
  turf_id   : 0,
  turf_name : "South United Football Club",
  turf_place: "RBANM's Ground",
  turf_area : "Bangalore",
  turf_address: "South United Football Club, RBANM's Grounds, Gate No 3, Gangadhar Chetty Road, near Ulsoor, Bengaluru, Karnataka",
  turf_about: `Football:- It is recommended but not compulsory to wear football studs while playing at the facility.- Metal studs are not allowed.`,
  turf_contactno: "+91 9723454343",
  turf_amenities: ["Parking", "Restroom","Drinking Water","Sitting Stand","First Aid"],
  turf_sports: ["football"],
  turf_imgurl1 : "https://playo.gumlet.io/SPORTSALLEY/SouthUnitedFootballClub1642749273793.jpg",
  turf_distance: 2.4, //km
  turf_avg_rating: 4.5, //rating 
  turf_no_of_rating: 83, //no.of.rate
  turf_openingHours: {
  weekdays: "",
  weekends: "",
  alldays : "6AM - 2AM"
  },
  turf_map:`<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1943.92619824201!2d77.614312!3d12.981291!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae168f738eb82b%3A0xce45df8cc8f4dee5!2sSouth%20United%20Football%20Club!5e0!3m2!1sen!2sus!4v1720444548855!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`  
  },
  {
  turf_id   : 1,
  turf_name : "Tiger 5 Sports Arena - Dairy Circle",
  turf_place: "Bannerghatta Road",
  turf_area : "erode",
  turf_address: "4/1, Bannerghatta Main Road, Bhavani Nagar, S.G. Palya, Bengaluru, Karnataka 560029",
  turf_about: `Football:- It is recommended but not compulsory to wear football studs while playing at the facility.- Metal studs are not allowed.`,
  turf_contactno: "+91 8532554343",
  turf_amenities: ["Parking","Drinking Water","Change Room","First Aid"],
  turf_sports: ["cricket","volleyball","football"],
  turf_imgurl1 : "https://playo.gumlet.io/TIGER5SPORTSDAIRYCIRCLE20221220100139092493/Tiger5SportsDairyCircle1671530923082.jpeg",
  turf_distance: 4.4, //km
  turf_avg_rating: 3.94, //rating 
  turf_no_of_rating: 35, //no.of.rate
  turf_openingHours: {
  weekdays: "",
  weekends: "",
  alldays : "Open 24x7"
  },
  turf_map:`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.611127372997!2d77.60082607494274!3d12.932696887379118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1520474a5d91%3A0x289b30472f37ceee!2sTiger%205%20sports%20-%20Dairy%20circle!5e0!3m2!1sen!2sin!4v1720448931348!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`  
  },
  {
  turf_id   : 2,
  turf_name : "Gabriel Sports Club",
  turf_place: "Hennur Cross",
  turf_area : "Bangalore",
  turf_address: "108/1, 1st cross, Hormavu Agara main road, (landmark: Reliance smart point), Bengaluru- 43",
  turf_about: `Football:- It is recommended but not compulsory to wear football studs while playing at the facility.- Metal studs are not allowed.- Smoking is prohibited within 50 meters of the venue.- Participants are requested to carry their own shoes and water bottles to the venue.`,
  turf_contactno: "+91 945863483",
  turf_amenities: ["Parking","Drinking Water","Change Room","First Aid"],
  turf_sports: ["basketball","cricket","volleyball","football"],
  turf_imgurl1 : "https://playo.gumlet.io/GABRIELSPORTSACADEMY20220226222143463915/GabrielSportsAcademy1645914083397.jpeg?w=700&format=webp&q=30&overlay=https://playo-website.gumlet.io/playo-website-v2/logos-icons/playo-logo.png&overlay_width_pct=0.2&overlay_height_pct=1&overlay_position=bottomright",
  turf_distance: 9.4, //km
  turf_avg_rating: 5.00, //rating 
  turf_no_of_rating: 8, //no.of.rate
  turf_openingHours: {
  weekdays: "",
  weekends: "",
  alldays : "6AM - 11PM"
  },
  turf_map:`<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1943.46651318081!2d77.646141!3d13.039935!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17d58e19953f%3A0x6d18634e85c4a80b!2sGabriel%20Sports%20Club%20%7C%20Coaching%20Football%20Basketball%20%7C%20Dance%20Class%20for%20all%20ages%20%7C%20fitness%20for%20men%20and%20women%20%7C%20Turf%20Rent!5e0!3m2!1sen!2sus!4v1720450663875!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`  
  }, {
  turf_id   : 3,
  turf_name : "BTS Turf Club",
  turf_area : "chennai",
  turf_place: "St Meera School",
  turf_address: "15, Cambridge Road, Near Sri Sai Mandir, Deena Bandu Nagar, Jeevan Kendra Layout, Ulsoor, Domlur, Bengaluru, Karnataka - 560008",
  turf_about: "Football: - It is recommended but not compulsory to wear football studs while playing at the facility.- Metal studs are not allowed.Box Cricket:- Stumps and Bats will be provided by the venue.- Users have to bring their own Cricket Balls.",
  turf_contactno: "+91 9734214553",
  turf_amenities: ["Parking", "Restroom","Drinking Water"],
  turf_sports: ["cricket","football"],
  turf_imgurl1 : "https://playo.gumlet.io/BTSTURFCLUB20240531052641675463/BTSTurfClub1717174026110.jpg?auto=compress,format&h=300",
  turf_distance: 3.7, //km
  turf_avg_rating: 4.20, //rating 
  turf_no_of_rating:10, //no.of.rate
  turf_openingHours: {
  weekdays: "6AM - 9AM & 3PM - 11PM On weekdays",
  weekends: "6AM - 11PM On weekends"
  },
  turf_map:`<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d972.0124225127067!2d77.62850816352373!3d12.968672241538192!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17d0d07c413f%3A0xaa53d0ab0f6822b1!2sSoccerholic%20Bangalore%20I%20Sports%20Arena%2C%20Football%20%26%20Cricket%20Court%20I%20Kids%20%26%20Adults%20Training%20I%20Best%20Sports%20Academy%20in%20Bangalore!5e0!3m2!1sen!2sus!4v1720331140158!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`  
  } ,
  {
  turf_id   : 0,
  turf_name : "South United Football Club",
  turf_place: "RBANM's Ground",
  turf_area : "Bangalore",
  turf_address: "South United Football Club, RBANM's Grounds, Gate No 3, Gangadhar Chetty Road, near Ulsoor, Bengaluru, Karnataka",
  turf_about: `Football:- It is recommended but not compulsory to wear football studs while playing at the facility.- Metal studs are not allowed.`,
  turf_contactno: "+91 9723454343",
  turf_amenities: ["Parking", "Restroom","Drinking Water","Sitting Stand","First Aid"],
  turf_sports: ["football"],
  turf_imgurl1 : "https://playo.gumlet.io/SPORTSALLEY/SouthUnitedFootballClub1642749273793.jpg",
  turf_distance: 2.4, //km
  turf_avg_rating: 4.5, //rating 
  turf_no_of_rating: 83, //no.of.rate
  turf_openingHours: {
  weekdays: "",
  weekends: "",
  alldays : "6AM - 2AM"
  },
  turf_map:`<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1943.92619824201!2d77.614312!3d12.981291!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae168f738eb82b%3A0xce45df8cc8f4dee5!2sSouth%20United%20Football%20Club!5e0!3m2!1sen!2sus!4v1720444548855!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`  
  },
  {
  turf_id   : 1,
  turf_name : "Tiger 5 Sports Arena - Dairy Circle",
  turf_place: "Bannerghatta Road",
  turf_area : "erode",
  turf_address: "4/1, Bannerghatta Main Road, Bhavani Nagar, S.G. Palya, Bengaluru, Karnataka 560029",
  turf_about: `Football:- It is recommended but not compulsory to wear football studs while playing at the facility.- Metal studs are not allowed.`,
  turf_contactno: "+91 8532554343",
  turf_amenities: ["Parking","Drinking Water","Change Room","First Aid"],
  turf_sports: ["cricket","volleyball","football"],
  turf_imgurl1 : "https://playo.gumlet.io/TIGER5SPORTSDAIRYCIRCLE20221220100139092493/Tiger5SportsDairyCircle1671530923082.jpeg",
  turf_distance: 4.4, //km
  turf_avg_rating: 3.94, //rating 
  turf_no_of_rating: 35, //no.of.rate
  turf_openingHours: {
  weekdays: "",
  weekends: "",
  alldays : "Open 24x7"
  },
  turf_map:`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.611127372997!2d77.60082607494274!3d12.932696887379118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1520474a5d91%3A0x289b30472f37ceee!2sTiger%205%20sports%20-%20Dairy%20circle!5e0!3m2!1sen!2sin!4v1720448931348!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`  
  },
  {
  turf_id   : 4,
  turf_name : "Wilson Garden Club",
  turf_place: "Off Hosur Main Road",
  turf_area : "chennai",
  turf_address: "No 35/2, 9th Cross Road, Hombe Gowda Nagara, Wilson Garden, Bengaluru, Karnataka - 560027",
  turf_about: `Badminton:- Non Marking Shoes compulsory for Badminton. Shoes must be worn after entering the facility.- Sports equipment not available on rent.- Barefoot play is strictly prohibited.- A maximum of 4 members per booking per badminton court is admissible.`,
  turf_contactno: "+91 935454343",
  turf_amenities: ["Parking","Drinking Water","Change Room","First Aid"],
  turf_sports: ["tennis"],
  turf_imgurl1 : "https://playo.gumlet.io/BALAJINAGARSHUTTLECOURT/WilsonGardenClub1708877751037.jpg",
  turf_distance: 2.6, //km
  turf_avg_rating: 4.7, //rating 
  turf_no_of_rating: 7, //no.of.rate
  turf_openingHours: {
  weekdays: "",
  weekends: "",
  alldays : "6AM - 10PM"
  },
  turf_map:`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1944.1822264310817!2d77.59486947208647!3d12.948515209114476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c626efd32f%3A0x38bfa60e1102ef0f!2sWilson%20Garden%20Club!5e0!3m2!1sen!2sus!4v1720445194254!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`  
  },
  {
  turf_id   : 5,
  turf_name : "AUK Sports Zone",
  turf_place: "Banagiri Nagara",
  turf_area : "chennai",
  turf_address: "Beside Apollo National Public School, 7 Block, Kathreguppe, Banashankari 3rd Stage, Banashankari, Bengaluru, Karnataka 560085",
  turf_about: `Football:- It is recommended but not compulsory to wear football studs while playing at the facility.- Metal studs are not allowed.`,
  turf_contactno: "+91 9243564942",
  turf_amenities: ["Parking","Drinking Water","Restroom"],
  turf_sports: ["cricket","football","basketball"],
  turf_imgurl1 : "https://playo.gumlet.io/AUKSPORTSZONE20240203093022107518/AUKSportsZone1706952610722.jpeg",
  turf_distance: 6.8, //km
  turf_avg_rating: 2.64, //rating 
  turf_no_of_rating: 11, //no.of.rate
  turf_openingHours: {
  weekdays: "",
  weekends: "",
  alldays : "6AM - 10PM"
  },
  turf_map:`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11595.814405455036!2d77.54860265526936!3d12.924284226103945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f14e6c8c4b7%3A0x3636d11dcfd8963d!2sAUK%20SPORTS%20ZONE!5e0!3m2!1sen!2sin!4v1720452804138!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`  
  },
  {
  turf_id   : 0,
  turf_name : "South United Football Club",
  turf_place: "RBANM's Ground",
  turf_area : "Bangalore",
  turf_address: "South United Football Club, RBANM's Grounds, Gate No 3, Gangadhar Chetty Road, near Ulsoor, Bengaluru, Karnataka",
  turf_about: `Football:- It is recommended but not compulsory to wear football studs while playing at the facility.- Metal studs are not allowed.`,
  turf_contactno: "+91 9723454343",
  turf_amenities: ["Parking", "Restroom","Drinking Water","Sitting Stand","First Aid"],
  turf_sports: ["football"],
  turf_imgurl1 : "https://playo.gumlet.io/SPORTSALLEY/SouthUnitedFootballClub1642749273793.jpg",
  turf_distance: 2.4, //km
  turf_avg_rating: 4.5, //rating 
  turf_no_of_rating: 83, //no.of.rate
  turf_openingHours: {
  weekdays: "",
  weekends: "",
  alldays : "6AM - 2AM"
  },
  turf_map:`<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1943.92619824201!2d77.614312!3d12.981291!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae168f738eb82b%3A0xce45df8cc8f4dee5!2sSouth%20United%20Football%20Club!5e0!3m2!1sen!2sus!4v1720444548855!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`  
  },
  {
  turf_id   : 1,
  turf_name : "Tiger 5 Sports Arena - Dairy Circle",
  turf_place: "Bannerghatta Road",
  turf_area : "erode",
  turf_address: "4/1, Bannerghatta Main Road, Bhavani Nagar, S.G. Palya, Bengaluru, Karnataka 560029",
  turf_about: `Football:- It is recommended but not compulsory to wear football studs while playing at the facility.- Metal studs are not allowed.`,
  turf_contactno: "+91 8532554343",
  turf_amenities: ["Parking","Drinking Water","Change Room","First Aid"],
  turf_sports: ["cricket","volleyball","football"],
  turf_imgurl1 : "https://playo.gumlet.io/TIGER5SPORTSDAIRYCIRCLE20221220100139092493/Tiger5SportsDairyCircle1671530923082.jpeg",
  turf_distance: 4.4, //km
  turf_avg_rating: 3.94, //rating 
  turf_no_of_rating: 35, //no.of.rate
  turf_openingHours: {
  weekdays: "",
  weekends: "",
  alldays : "Open 24x7"
  },
  turf_map:`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.611127372997!2d77.60082607494274!3d12.932696887379118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1520474a5d91%3A0x289b30472f37ceee!2sTiger%205%20sports%20-%20Dairy%20circle!5e0!3m2!1sen!2sin!4v1720448931348!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`  
  },
  {
  turf_id   : 5,
  turf_name : "AUK Sports Zone",
  turf_place: "Banagiri Nagara",
  turf_area : "erode",
  turf_address: "Beside Apollo National Public School, 7 Block, Kathreguppe, Banashankari 3rd Stage, Banashankari, Bengaluru, Karnataka 560085",
  turf_about: `Football:- It is recommended but not compulsory to wear football studs while playing at the facility.- Metal studs are not allowed.`,
  turf_contactno: "+91 9243564942",
  turf_amenities: ["Parking","Drinking Water","Restroom"],
  turf_sports: ["cricket","football","basketball"],
  turf_imgurl1 : "https://playo.gumlet.io/AUKSPORTSZONE20240203093022107518/AUKSportsZone1706952610722.jpeg",
  turf_distance: 6.8, //km
  turf_avg_rating: 2.64, //rating 
  turf_no_of_rating: 11, //no.of.rate
  turf_openingHours: {
  weekdays: "",
  weekends: "",
  alldays : "6AM - 10PM"
  },
  turf_map:`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11595.814405455036!2d77.54860265526936!3d12.924284226103945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f14e6c8c4b7%3A0x3636d11dcfd8963d!2sAUK%20SPORTS%20ZONE!5e0!3m2!1sen!2sin!4v1720452804138!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`  
  },
  {
  turf_id   : 0,
  turf_name : "South United Football Club",
  turf_place: "RBANM's Ground",
  turf_area : "Bangalore",
  turf_address: "South United Football Club, RBANM's Grounds, Gate No 3, Gangadhar Chetty Road, near Ulsoor, Bengaluru, Karnataka",
  turf_about: `Football:- It is recommended but not compulsory to wear football studs while playing at the facility.- Metal studs are not allowed.`,
  turf_contactno: "+91 9723454343",
  turf_amenities: ["Parking", "Restroom","Drinking Water","Sitting Stand","First Aid"],
  turf_sports: ["football"],
  turf_imgurl1 : "https://playo.gumlet.io/SPORTSALLEY/SouthUnitedFootballClub1642749273793.jpg",
  turf_distance: 2.4, //km
  turf_avg_rating: 4.5, //rating 
  turf_no_of_rating: 83, //no.of.rate
  turf_openingHours: {
  weekdays: "",
  weekends: "",
  alldays : "6AM - 2AM"
  },
  turf_map:`<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1943.92619824201!2d77.614312!3d12.981291!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae168f738eb82b%3A0xce45df8cc8f4dee5!2sSouth%20United%20Football%20Club!5e0!3m2!1sen!2sus!4v1720444548855!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`  
  },
  {
  turf_id   : 1,
  turf_name : "Tiger 5 Sports Arena - Dairy Circle",
  turf_place: "Bannerghatta Road",
  turf_area : "erode",
  turf_address: "4/1, Bannerghatta Main Road, Bhavani Nagar, S.G. Palya, Bengaluru, Karnataka 560029",
  turf_about: `Football:- It is recommended but not compulsory to wear football studs while playing at the facility.- Metal studs are not allowed.`,
  turf_contactno: "+91 8532554343",
  turf_amenities: ["Parking","Drinking Water","Change Room","First Aid"],
  turf_sports: ["cricket","volleyball","football"],
  turf_imgurl1 : "https://playo.gumlet.io/TIGER5SPORTSDAIRYCIRCLE20221220100139092493/Tiger5SportsDairyCircle1671530923082.jpeg",
  turf_distance: 4.4, //km
  turf_avg_rating: 3.94, //rating 
  turf_no_of_rating: 35, //no.of.rate
  turf_openingHours: {
  weekdays: "",
  weekends: "",
  alldays : "Open 24x7"
  },
  turf_map:`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.611127372997!2d77.60082607494274!3d12.932696887379118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1520474a5d91%3A0x289b30472f37ceee!2sTiger%205%20sports%20-%20Dairy%20circle!5e0!3m2!1sen!2sin!4v1720448931348!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`  
  },
  {
  turf_id   : 2,
  turf_name : "Gabriel Sports Club",
  turf_place: "Hennur Cross",
  turf_area : "Bangalore",
  turf_address: "108/1, 1st cross, Hormavu Agara main road, (landmark: Reliance smart point), Bengaluru- 43",
  turf_about: `Football:- It is recommended but not compulsory to wear football studs while playing at the facility.- Metal studs are not allowed.- Smoking is prohibited within 50 meters of the venue.- Participants are requested to carry their own shoes and water bottles to the venue.`,
  turf_contactno: "+91 945863483",
  turf_amenities: ["Parking","Drinking Water","Change Room","First Aid"],
  turf_sports: ["basketball","cricket","volleyball","football"],
  turf_imgurl1 : "https://playo.gumlet.io/GABRIELSPORTSACADEMY20220226222143463915/GabrielSportsAcademy1645914083397.jpeg?w=700&format=webp&q=30&overlay=https://playo-website.gumlet.io/playo-website-v2/logos-icons/playo-logo.png&overlay_width_pct=0.2&overlay_height_pct=1&overlay_position=bottomright",
  turf_distance: 9.4, //km
  turf_avg_rating: 5.00, //rating 
  turf_no_of_rating: 8, //no.of.rate
  turf_openingHours: {
  weekdays: "",
  weekends: "",
  alldays : "6AM - 11PM"
  },
  turf_map:`<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1943.46651318081!2d77.646141!3d13.039935!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17d58e19953f%3A0x6d18634e85c4a80b!2sGabriel%20Sports%20Club%20%7C%20Coaching%20Football%20Basketball%20%7C%20Dance%20Class%20for%20all%20ages%20%7C%20fitness%20for%20men%20and%20women%20%7C%20Turf%20Rent!5e0!3m2!1sen!2sus!4v1720450663875!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`  
  }, {
  turf_id   : 3,
  turf_name : "BTS Turf Club",
  turf_area : "chennai",
  turf_place: "St Meera School",
  turf_address: "15, Cambridge Road, Near Sri Sai Mandir, Deena Bandu Nagar, Jeevan Kendra Layout, Ulsoor, Domlur, Bengaluru, Karnataka - 560008",
  turf_about: "Football: - It is recommended but not compulsory to wear football studs while playing at the facility.- Metal studs are not allowed.Box Cricket:- Stumps and Bats will be provided by the venue.- Users have to bring their own Cricket Balls.",
  turf_contactno: "+91 9734214553",
  turf_amenities: ["Parking", "Restroom","Drinking Water"],
  turf_sports: ["cricket","football"],
  turf_imgurl1 : "https://playo.gumlet.io/BTSTURFCLUB20240531052641675463/BTSTurfClub1717174026110.jpg?auto=compress,format&h=300",
  turf_distance: 3.7, //km
  turf_avg_rating: 4.20, //rating 
  turf_no_of_rating:10, //no.of.rate
  turf_openingHours: {
  weekdays: "6AM - 9AM & 3PM - 11PM On weekdays",
  weekends: "6AM - 11PM On weekends"
  },
  turf_map:`<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d972.0124225127067!2d77.62850816352373!3d12.968672241538192!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17d0d07c413f%3A0xaa53d0ab0f6822b1!2sSoccerholic%20Bangalore%20I%20Sports%20Arena%2C%20Football%20%26%20Cricket%20Court%20I%20Kids%20%26%20Adults%20Training%20I%20Best%20Sports%20Academy%20in%20Bangalore!5e0!3m2!1sen!2sus!4v1720331140158!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`  
  } ,
  {
  turf_id   : 0,
  turf_name : "South United Football Club",
  turf_place: "RBANM's Ground",
  turf_area : "Bangalore",
  turf_address: "South United Football Club, RBANM's Grounds, Gate No 3, Gangadhar Chetty Road, near Ulsoor, Bengaluru, Karnataka",
  turf_about: `Football:- It is recommended but not compulsory to wear football studs while playing at the facility.- Metal studs are not allowed.`,
  turf_contactno: "+91 9723454343",
  turf_amenities: ["Parking", "Restroom","Drinking Water","Sitting Stand","First Aid"],
  turf_sports: ["football"],
  turf_imgurl1 : "https://playo.gumlet.io/SPORTSALLEY/SouthUnitedFootballClub1642749273793.jpg",
  turf_distance: 2.4, //km
  turf_avg_rating: 4.5, //rating 
  turf_no_of_rating: 83, //no.of.rate
  turf_openingHours: {
  weekdays: "",
  weekends: "",
  alldays : "6AM - 2AM"
  },
  turf_map:`<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1943.92619824201!2d77.614312!3d12.981291!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae168f738eb82b%3A0xce45df8cc8f4dee5!2sSouth%20United%20Football%20Club!5e0!3m2!1sen!2sus!4v1720444548855!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`  
  },
  {
  turf_id   : 1,
  turf_name : "Tiger 5 Sports Arena - Dairy Circle",
  turf_place: "Bannerghatta Road",
  turf_area : "erode",
  turf_address: "4/1, Bannerghatta Main Road, Bhavani Nagar, S.G. Palya, Bengaluru, Karnataka 560029",
  turf_about: `Football:- It is recommended but not compulsory to wear football studs while playing at the facility.- Metal studs are not allowed.`,
  turf_contactno: "+91 8532554343",
  turf_amenities: ["Parking","Drinking Water","Change Room","First Aid"],
  turf_sports: ["cricket","volleyball","football"],
  turf_imgurl1 : "https://playo.gumlet.io/TIGER5SPORTSDAIRYCIRCLE20221220100139092493/Tiger5SportsDairyCircle1671530923082.jpeg",
  turf_distance: 4.4, //km
  turf_avg_rating: 3.94, //rating 
  turf_no_of_rating: 35, //no.of.rate
  turf_openingHours: {
  weekdays: "",
  weekends: "",
  alldays : "Open 24x7"
  },
  turf_map:`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.611127372997!2d77.60082607494274!3d12.932696887379118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1520474a5d91%3A0x289b30472f37ceee!2sTiger%205%20sports%20-%20Dairy%20circle!5e0!3m2!1sen!2sin!4v1720448931348!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`  
  },
  {
  turf_id   : 4,
  turf_name : "Wilson Garden Club",
  turf_place: "Off Hosur Main Road",
  turf_area : "chennai",
  turf_address: "No 35/2, 9th Cross Road, Hombe Gowda Nagara, Wilson Garden, Bengaluru, Karnataka - 560027",
  turf_about: `Badminton:- Non Marking Shoes compulsory for Badminton. Shoes must be worn after entering the facility.- Sports equipment not available on rent.- Barefoot play is strictly prohibited.- A maximum of 4 members per booking per badminton court is admissible.`,
  turf_contactno: "+91 935454343",
  turf_amenities: ["Parking","Drinking Water","Change Room","First Aid"],
  turf_sports: ["tennis"],
  turf_imgurl1 : "https://playo.gumlet.io/BALAJINAGARSHUTTLECOURT/WilsonGardenClub1708877751037.jpg",
  turf_distance: 2.6, //km
  turf_avg_rating: 4.7, //rating 
  turf_no_of_rating: 7, //no.of.rate
  turf_openingHours: {
  weekdays: "",
  weekends: "",
  alldays : "6AM - 10PM"
  },
  turf_map:`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1944.1822264310817!2d77.59486947208647!3d12.948515209114476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c626efd32f%3A0x38bfa60e1102ef0f!2sWilson%20Garden%20Club!5e0!3m2!1sen!2sus!4v1720445194254!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`  
  },
  {
  turf_id   : 5,
  turf_name : "AUK Sports Zone",
  turf_place: "Banagiri Nagara",
  turf_area : "chennai",
  turf_address: "Beside Apollo National Public School, 7 Block, Kathreguppe, Banashankari 3rd Stage, Banashankari, Bengaluru, Karnataka 560085",
  turf_about: `Football:- It is recommended but not compulsory to wear football studs while playing at the facility.- Metal studs are not allowed.`,
  turf_contactno: "+91 9243564942",
  turf_amenities: ["Parking","Drinking Water","Restroom"],
  turf_sports: ["cricket","football","basketball"],
  turf_imgurl1 : "https://playo.gumlet.io/AUKSPORTSZONE20240203093022107518/AUKSportsZone1706952610722.jpeg",
  turf_distance: 6.8, //km
  turf_avg_rating: 2.64, //rating 
  turf_no_of_rating: 11, //no.of.rate
  turf_openingHours: {
  weekdays: "",
  weekends: "",
  alldays : "6AM - 10PM"
  },
  turf_map:`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11595.814405455036!2d77.54860265526936!3d12.924284226103945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f14e6c8c4b7%3A0x3636d11dcfd8963d!2sAUK%20SPORTS%20ZONE!5e0!3m2!1sen!2sin!4v1720452804138!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`  
  },
  {
  turf_id   : 0,
  turf_name : "South United Football Club",
  turf_place: "RBANM's Ground",
  turf_area : "Bangalore",
  turf_address: "South United Football Club, RBANM's Grounds, Gate No 3, Gangadhar Chetty Road, near Ulsoor, Bengaluru, Karnataka",
  turf_about: `Football:- It is recommended but not compulsory to wear football studs while playing at the facility.- Metal studs are not allowed.`,
  turf_contactno: "+91 9723454343",
  turf_amenities: ["Parking", "Restroom","Drinking Water","Sitting Stand","First Aid"],
  turf_sports: ["football"],
  turf_imgurl1 : "https://playo.gumlet.io/SPORTSALLEY/SouthUnitedFootballClub1642749273793.jpg",
  turf_distance: 2.4, //km
  turf_avg_rating: 4.5, //rating 
  turf_no_of_rating: 83, //no.of.rate
  turf_openingHours: {
  weekdays: "",
  weekends: "",
  alldays : "6AM - 2AM"
  },
  turf_map:`<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1943.92619824201!2d77.614312!3d12.981291!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae168f738eb82b%3A0xce45df8cc8f4dee5!2sSouth%20United%20Football%20Club!5e0!3m2!1sen!2sus!4v1720444548855!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`  
  },
  {
  turf_id   : 1,
  turf_name : "Tiger 5 Sports Arena - Dairy Circle",
  turf_place: "Bannerghatta Road",
  turf_area : "erode",
  turf_address: "4/1, Bannerghatta Main Road, Bhavani Nagar, S.G. Palya, Bengaluru, Karnataka 560029",
  turf_about: `Football:- It is recommended but not compulsory to wear football studs while playing at the facility.- Metal studs are not allowed.`,
  turf_contactno: "+91 8532554343",
  turf_amenities: ["Parking","Drinking Water","Change Room","First Aid"],
  turf_sports: ["cricket","volleyball","football"],
  turf_imgurl1 : "https://playo.gumlet.io/TIGER5SPORTSDAIRYCIRCLE20221220100139092493/Tiger5SportsDairyCircle1671530923082.jpeg",
  turf_distance: 4.4, //km
  turf_avg_rating: 3.94, //rating 
  turf_no_of_rating: 35, //no.of.rate
  turf_openingHours: {
  weekdays: "",
  weekends: "",
  alldays : "Open 24x7"
  },
  turf_map:`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.611127372997!2d77.60082607494274!3d12.932696887379118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1520474a5d91%3A0x289b30472f37ceee!2sTiger%205%20sports%20-%20Dairy%20circle!5e0!3m2!1sen!2sin!4v1720448931348!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`  
  },
  {
  turf_id   : 5,
  turf_name : "AUK Sports Zone",
  turf_place: "Banagiri Nagara",
  turf_area : "erode",
  turf_address: "Beside Apollo National Public School, 7 Block, Kathreguppe, Banashankari 3rd Stage, Banashankari, Bengaluru, Karnataka 560085",
  turf_about: `Football:- It is recommended but not compulsory to wear football studs while playing at the facility.- Metal studs are not allowed.`,
  turf_contactno: "+91 9243564942",
  turf_amenities: ["Parking","Drinking Water","Restroom"],
  turf_sports: ["cricket","football","basketball"],
  turf_imgurl1 : "https://playo.gumlet.io/AUKSPORTSZONE20240203093022107518/AUKSportsZone1706952610722.jpeg",
  turf_distance: 6.8, //km
  turf_avg_rating: 2.64, //rating 
  turf_no_of_rating: 11, //no.of.rate
  turf_openingHours: {
  weekdays: "",
  weekends: "",
  alldays : "6AM - 10PM"
  },
  turf_map:`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11595.814405455036!2d77.54860265526936!3d12.924284226103945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f14e6c8c4b7%3A0x3636d11dcfd8963d!2sAUK%20SPORTS%20ZONE!5e0!3m2!1sen!2sin!4v1720452804138!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`  
  },
  {
  turf_id   : 0,
  turf_name : "South United Football Club",
  turf_place: "RBANM's Ground",
  turf_area : "Bangalore",
  turf_address: "South United Football Club, RBANM's Grounds, Gate No 3, Gangadhar Chetty Road, near Ulsoor, Bengaluru, Karnataka",
  turf_about: `Football:- It is recommended but not compulsory to wear football studs while playing at the facility.- Metal studs are not allowed.`,
  turf_contactno: "+91 9723454343",
  turf_amenities: ["Parking", "Restroom","Drinking Water","Sitting Stand","First Aid"],
  turf_sports: ["football"],
  turf_imgurl1 : "https://playo.gumlet.io/SPORTSALLEY/SouthUnitedFootballClub1642749273793.jpg",
  turf_distance: 2.4, //km
  turf_avg_rating: 4.5, //rating 
  turf_no_of_rating: 83, //no.of.rate
  turf_openingHours: {
  weekdays: "",
  weekends: "",
  alldays : "6AM - 2AM"
  },
  turf_map:`<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1943.92619824201!2d77.614312!3d12.981291!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae168f738eb82b%3A0xce45df8cc8f4dee5!2sSouth%20United%20Football%20Club!5e0!3m2!1sen!2sus!4v1720444548855!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`  
  },
  {
  turf_id   : 1,
  turf_name : "Tiger 5 Sports Arena - Dairy Circle",
  turf_place: "Bannerghatta Road",
  turf_area : "erode",
  turf_address: "4/1, Bannerghatta Main Road, Bhavani Nagar, S.G. Palya, Bengaluru, Karnataka 560029",
  turf_about: `Football:- It is recommended but not compulsory to wear football studs while playing at the facility.- Metal studs are not allowed.`,
  turf_contactno: "+91 8532554343",
  turf_amenities: ["Parking","Drinking Water","Change Room","First Aid"],
  turf_sports: ["cricket","volleyball","football"],
  turf_imgurl1 : "https://playo.gumlet.io/TIGER5SPORTSDAIRYCIRCLE20221220100139092493/Tiger5SportsDairyCircle1671530923082.jpeg",
  turf_distance: 4.4, //km
  turf_avg_rating: 3.94, //rating 
  turf_no_of_rating: 35, //no.of.rate
  turf_openingHours: {
  weekdays: "",
  weekends: "",
  alldays : "Open 24x7"
  },
  turf_map:`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.611127372997!2d77.60082607494274!3d12.932696887379118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1520474a5d91%3A0x289b30472f37ceee!2sTiger%205%20sports%20-%20Dairy%20circle!5e0!3m2!1sen!2sin!4v1720448931348!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`  
  },
  {
  turf_id   : 2,
  turf_name : "Gabriel Sports Club",
  turf_place: "Hennur Cross",
  turf_area : "Bangalore",
  turf_address: "108/1, 1st cross, Hormavu Agara main road, (landmark: Reliance smart point), Bengaluru- 43",
  turf_about: `Football:- It is recommended but not compulsory to wear football studs while playing at the facility.- Metal studs are not allowed.- Smoking is prohibited within 50 meters of the venue.- Participants are requested to carry their own shoes and water bottles to the venue.`,
  turf_contactno: "+91 945863483",
  turf_amenities: ["Parking","Drinking Water","Change Room","First Aid"],
  turf_sports: ["basketball","cricket","volleyball","football"],
  turf_imgurl1 : "https://playo.gumlet.io/GABRIELSPORTSACADEMY20220226222143463915/GabrielSportsAcademy1645914083397.jpeg?w=700&format=webp&q=30&overlay=https://playo-website.gumlet.io/playo-website-v2/logos-icons/playo-logo.png&overlay_width_pct=0.2&overlay_height_pct=1&overlay_position=bottomright",
  turf_distance: 9.4, //km
  turf_avg_rating: 5.00, //rating 
  turf_no_of_rating: 8, //no.of.rate
  turf_openingHours: {
  weekdays: "",
  weekends: "",
  alldays : "6AM - 11PM"
  },
  turf_map:`<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1943.46651318081!2d77.646141!3d13.039935!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17d58e19953f%3A0x6d18634e85c4a80b!2sGabriel%20Sports%20Club%20%7C%20Coaching%20Football%20Basketball%20%7C%20Dance%20Class%20for%20all%20ages%20%7C%20fitness%20for%20men%20and%20women%20%7C%20Turf%20Rent!5e0!3m2!1sen!2sus!4v1720450663875!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`  
  }, {
  turf_id   : 3,
  turf_name : "BTS Turf Club",
  turf_area : "chennai",
  turf_place: "St Meera School",
  turf_address: "15, Cambridge Road, Near Sri Sai Mandir, Deena Bandu Nagar, Jeevan Kendra Layout, Ulsoor, Domlur, Bengaluru, Karnataka - 560008",
  turf_about: "Football: - It is recommended but not compulsory to wear football studs while playing at the facility.- Metal studs are not allowed.Box Cricket:- Stumps and Bats will be provided by the venue.- Users have to bring their own Cricket Balls.",
  turf_contactno: "+91 9734214553",
  turf_amenities: ["Parking", "Restroom","Drinking Water"],
  turf_sports: ["cricket","football"],
  turf_imgurl1 : "https://playo.gumlet.io/BTSTURFCLUB20240531052641675463/BTSTurfClub1717174026110.jpg?auto=compress,format&h=300",
  turf_distance: 3.7, //km
  turf_avg_rating: 4.20, //rating 
  turf_no_of_rating:10, //no.of.rate
  turf_openingHours: {
  weekdays: "6AM - 9AM & 3PM - 11PM On weekdays",
  weekends: "6AM - 11PM On weekends"
  },
  turf_map:`<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d972.0124225127067!2d77.62850816352373!3d12.968672241538192!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17d0d07c413f%3A0xaa53d0ab0f6822b1!2sSoccerholic%20Bangalore%20I%20Sports%20Arena%2C%20Football%20%26%20Cricket%20Court%20I%20Kids%20%26%20Adults%20Training%20I%20Best%20Sports%20Academy%20in%20Bangalore!5e0!3m2!1sen!2sus!4v1720331140158!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`  
  } ,
  {
  turf_id   : 0,
  turf_name : "South United Football Club",
  turf_place: "RBANM's Ground",
  turf_area : "Bangalore",
  turf_address: "South United Football Club, RBANM's Grounds, Gate No 3, Gangadhar Chetty Road, near Ulsoor, Bengaluru, Karnataka",
  turf_about: `Football:- It is recommended but not compulsory to wear football studs while playing at the facility.- Metal studs are not allowed.`,
  turf_contactno: "+91 9723454343",
  turf_amenities: ["Parking", "Restroom","Drinking Water","Sitting Stand","First Aid"],
  turf_sports: ["football"],
  turf_imgurl1 : "https://playo.gumlet.io/SPORTSALLEY/SouthUnitedFootballClub1642749273793.jpg",
  turf_distance: 2.4, //km
  turf_avg_rating: 4.5, //rating 
  turf_no_of_rating: 83, //no.of.rate
  turf_openingHours: {
  weekdays: "",
  weekends: "",
  alldays : "6AM - 2AM"
  },
  turf_map:`<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1943.92619824201!2d77.614312!3d12.981291!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae168f738eb82b%3A0xce45df8cc8f4dee5!2sSouth%20United%20Football%20Club!5e0!3m2!1sen!2sus!4v1720444548855!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`  
  },
  {
  turf_id   : 1,
  turf_name : "Tiger 5 Sports Arena - Dairy Circle",
  turf_place: "Bannerghatta Road",
  turf_area : "erode",
  turf_address: "4/1, Bannerghatta Main Road, Bhavani Nagar, S.G. Palya, Bengaluru, Karnataka 560029",
  turf_about: `Football:- It is recommended but not compulsory to wear football studs while playing at the facility.- Metal studs are not allowed.`,
  turf_contactno: "+91 8532554343",
  turf_amenities: ["Parking","Drinking Water","Change Room","First Aid"],
  turf_sports: ["cricket","volleyball","football"],
  turf_imgurl1 : "https://playo.gumlet.io/TIGER5SPORTSDAIRYCIRCLE20221220100139092493/Tiger5SportsDairyCircle1671530923082.jpeg",
  turf_distance: 4.4, //km
  turf_avg_rating: 3.94, //rating 
  turf_no_of_rating: 35, //no.of.rate
  turf_openingHours: {
  weekdays: "",
  weekends: "",
  alldays : "Open 24x7"
  },
  turf_map:`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.611127372997!2d77.60082607494274!3d12.932696887379118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1520474a5d91%3A0x289b30472f37ceee!2sTiger%205%20sports%20-%20Dairy%20circle!5e0!3m2!1sen!2sin!4v1720448931348!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`  
  },
  {
  turf_id   : 4,
  turf_name : "Wilson Garden Club",
  turf_place: "Off Hosur Main Road",
  turf_area : "chennai",
  turf_address: "No 35/2, 9th Cross Road, Hombe Gowda Nagara, Wilson Garden, Bengaluru, Karnataka - 560027",
  turf_about: `Badminton:- Non Marking Shoes compulsory for Badminton. Shoes must be worn after entering the facility.- Sports equipment not available on rent.- Barefoot play is strictly prohibited.- A maximum of 4 members per booking per badminton court is admissible.`,
  turf_contactno: "+91 935454343",
  turf_amenities: ["Parking","Drinking Water","Change Room","First Aid"],
  turf_sports: ["tennis"],
  turf_imgurl1 : "https://playo.gumlet.io/BALAJINAGARSHUTTLECOURT/WilsonGardenClub1708877751037.jpg",
  turf_distance: 2.6, //km
  turf_avg_rating: 4.7, //rating 
  turf_no_of_rating: 7, //no.of.rate
  turf_openingHours: {
  weekdays: "",
  weekends: "",
  alldays : "6AM - 10PM"
  },
  turf_map:`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1944.1822264310817!2d77.59486947208647!3d12.948515209114476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c626efd32f%3A0x38bfa60e1102ef0f!2sWilson%20Garden%20Club!5e0!3m2!1sen!2sus!4v1720445194254!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`  
  },
  {
  turf_id   : 5,
  turf_name : "AUK Sports Zone",
  turf_place: "Banagiri Nagara",
  turf_area : "chennai",
  turf_address: "Beside Apollo National Public School, 7 Block, Kathreguppe, Banashankari 3rd Stage, Banashankari, Bengaluru, Karnataka 560085",
  turf_about: `Football:- It is recommended but not compulsory to wear football studs while playing at the facility.- Metal studs are not allowed.`,
  turf_contactno: "+91 9243564942",
  turf_amenities: ["Parking","Drinking Water","Restroom"],
  turf_sports: ["cricket","football","basketball"],
  turf_imgurl1 : "https://playo.gumlet.io/AUKSPORTSZONE20240203093022107518/AUKSportsZone1706952610722.jpeg",
  turf_distance: 6.8, //km
  turf_avg_rating: 2.64, //rating 
  turf_no_of_rating: 11, //no.of.rate
  turf_openingHours: {
  weekdays: "",
  weekends: "",
  alldays : "6AM - 10PM"
  },
  turf_map:`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11595.814405455036!2d77.54860265526936!3d12.924284226103945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f14e6c8c4b7%3A0x3636d11dcfd8963d!2sAUK%20SPORTS%20ZONE!5e0!3m2!1sen!2sin!4v1720452804138!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`  
  },
  {
  turf_id   : 0,
  turf_name : "South United Football Club",
  turf_place: "RBANM's Ground",
  turf_area : "Bangalore",
  turf_address: "South United Football Club, RBANM's Grounds, Gate No 3, Gangadhar Chetty Road, near Ulsoor, Bengaluru, Karnataka",
  turf_about: `Football:- It is recommended but not compulsory to wear football studs while playing at the facility.- Metal studs are not allowed.`,
  turf_contactno: "+91 9723454343",
  turf_amenities: ["Parking", "Restroom","Drinking Water","Sitting Stand","First Aid"],
  turf_sports: ["football"],
  turf_imgurl1 : "https://playo.gumlet.io/SPORTSALLEY/SouthUnitedFootballClub1642749273793.jpg",
  turf_distance: 2.4, //km
  turf_avg_rating: 4.5, //rating 
  turf_no_of_rating: 83, //no.of.rate
  turf_openingHours: {
  weekdays: "",
  weekends: "",
  alldays : "6AM - 2AM"
  },
  turf_map:`<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1943.92619824201!2d77.614312!3d12.981291!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae168f738eb82b%3A0xce45df8cc8f4dee5!2sSouth%20United%20Football%20Club!5e0!3m2!1sen!2sus!4v1720444548855!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`  
  },
  {
  turf_id   : 1,
  turf_name : "Tiger 5 Sports Arena - Dairy Circle",
  turf_place: "Bannerghatta Road",
  turf_area : "erode",
  turf_address: "4/1, Bannerghatta Main Road, Bhavani Nagar, S.G. Palya, Bengaluru, Karnataka 560029",
  turf_about: `Football:- It is recommended but not compulsory to wear football studs while playing at the facility.- Metal studs are not allowed.`,
  turf_contactno: "+91 8532554343",
  turf_amenities: ["Parking","Drinking Water","Change Room","First Aid"],
  turf_sports: ["cricket","volleyball","football"],
  turf_imgurl1 : "https://playo.gumlet.io/TIGER5SPORTSDAIRYCIRCLE20221220100139092493/Tiger5SportsDairyCircle1671530923082.jpeg",
  turf_distance: 4.4, //km
  turf_avg_rating: 3.94, //rating 
  turf_no_of_rating: 35, //no.of.rate
  turf_openingHours: {
  weekdays: "",
  weekends: "",
  alldays : "Open 24x7"
  },
  turf_map:`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.611127372997!2d77.60082607494274!3d12.932696887379118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1520474a5d91%3A0x289b30472f37ceee!2sTiger%205%20sports%20-%20Dairy%20circle!5e0!3m2!1sen!2sin!4v1720448931348!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`  
  },
  {
  turf_id   : 5,
  turf_name : "AUK Sports Zone",
  turf_place: "Banagiri Nagara",
  turf_area : "erode",
  turf_address: "Beside Apollo National Public School, 7 Block, Kathreguppe, Banashankari 3rd Stage, Banashankari, Bengaluru, Karnataka 560085",
  turf_about: `Football:- It is recommended but not compulsory to wear football studs while playing at the facility.- Metal studs are not allowed.`,
  turf_contactno: "+91 9243564942",
  turf_amenities: ["Parking","Drinking Water","Restroom"],
  turf_sports: ["cricket","football","basketball"],
  turf_imgurl1 : "https://playo.gumlet.io/AUKSPORTSZONE20240203093022107518/AUKSportsZone1706952610722.jpeg",
  turf_distance: 6.8, //km
  turf_avg_rating: 2.64, //rating 
  turf_no_of_rating: 11, //no.of.rate
  turf_openingHours: {
  weekdays: "",
  weekends: "",
  alldays : "6AM - 10PM"
  },
  turf_map:`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11595.814405455036!2d77.54860265526936!3d12.924284226103945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f14e6c8c4b7%3A0x3636d11dcfd8963d!2sAUK%20SPORTS%20ZONE!5e0!3m2!1sen!2sin!4v1720452804138!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`  
  }
];

function Book() {

    return (
        <>
            <main>
                <div className="bg-filter-bar-gray pb-3 tablet:flex tablet:flex-col laptop:pb-0 tablet:items-center laptop:tablet:flex-row laptop:px-5">
                    <h2 className="font-semibold  max-w-[225px] text-center mx-auto py-3 tablet:py-3 tablet:mx-3 laptop:text-left">Discover and Book Top Sports venues in Chennai Online</h2>
                    <SearchContainer />
                </div>
                <div className="grid gap-5 w-[95%] mx-auto">
                    {turfs.map((turf,id=id+1) => {
                        return(
                        <TurfCard
                                key={id}
                                imageUrl={turf.turf_imgurl1}
                                name={turf.turf_name}
                                rating={turf.turf_avg_rating}
                                reviewCount={turf.turf_no_of_rating}
                                location={turf.turf_area}
                                distance={turf.turf_distance}
                                sports={turf.turf_sports}
                        />)
                    })}
                </div>
                <Footer />
            </main>
        </>
    )

}

export default Book