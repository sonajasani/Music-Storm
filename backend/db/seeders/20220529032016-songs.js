'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Songs', [
        {
          title:"Manali Trance",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/manali-trance-the-shaukeens-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Manali-Trance-The-Shaukeens-500-500.jpg",
          album:"The Shaukeens",
          artist:"Lil Golu, Neha Kakkar",
          description:"Composer: Yo Yo Honey Singh && Starcast: Akshay Kumar, Anupam Kher, Piyush Mishra, Annu Kapoor, Lisa Haydon"
        },
        {
          title:"Chaar Bottle Vodka",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/chaar-botal-vodka-ragini-mms-2-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Chaar-Botal-Vodka-Ragini-MMS-2-500-500.jpg",
          album:"Ragini MMS 2",
          artist:"Yo Yo Honey Singh",
          description:"Composer: Yo Yo Honey Singh && Startcast: Sunny Leone, Anita Hassanandani, Pravin Dabas, Sandhya Mridul"
        },
        {
          title:"Agar Tum Saath Ho",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/agar-tum-saath-ho-tamasha-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/album/tamasha-500-500.jpg",
          album:"Tamasha",
          artist:"Alka Yagnik, Arijit Singh",
          description:"Composer: A.R. Rahman && Starcast:Ranbir Kapoor, Deepika Padukone, Javed Sheikh, Piyush Mishra, Sushma Seth"
        },
        {
          title:"Matargashti",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/matargashti-tamasha-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/album/tamasha-500-500.jpg",
          album:"Tamasha",
          artist:"Mohit Chauhan, A.R. Rahman",
          description:"Composer: A.R. Rahman && Starcast: Ranbir Kapoor, Deepika Padukone"
        },
        {
          title:"The Breakup Song",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/the-breakup-song-ae-dil-hai-mushkil-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/The-Breakup-Song-Ae-Dil-Hai-Mushkil-500-500.jpg",
          album:"Ae Dil Hai Mushkil",
          artist:"Pritam, Arijit Singh, Badshah, Jonita Gandhi, Nakash Aziz",
          description:"Composer: Pritam && Starcast: Ranbir Kapoor, Anushka Sharma, Aishwarya Rai Bachchan, Fawad Khan"
        },
        {
          title:"Ae Dil Hai Mushkil",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/ae-dil-hai-mushkil-title-track-pritam-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Ae-Dil-Hai-Mushkil-Title-Track-Pritam-500-500.jpg",
          album:"Ae Dil Hai Mushkil",
          artist:"Pritam, Arijit Singh",
          description:"Composer: Pritam && Starcast: Ranbir Kapoor, Anushka Sharma, Aishwarya Rai Bachchan, Fawad Khan"
        },
        {
          title:"Mere Rashke Qamar",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/mere-rashke-qamar-baadshaho-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Mere-Rashke-Qamar-Baadshaho-500-500.jpg",
          album:"Baadshaho",
          artist:"Nusrat Fateh Ali Khan, Rahat Fateh Ali Khan",
          description:"Composer: Nusrat Fateh Ali Khan, Tanishk Bagchi && Starcast: Ajay Devgn, Emraan Hashmi, Esha Gupta, Ileana D Cruz, Vidyut Jammwal, Sanjay"
        },
        {
          title:"Piya More",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/piya-more-baadshaho-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Piya-More-Baadshaho-500-500.jpg",
          album:"Baadshaho",
          artist:"Mika Singh, Neeti Mohan",
          description:"Composer: Ankit Tiwari && Starcast: Ajay Devgn, Emraan Hashmi, Esha Gupta, Ileana D Cruz, Vidyut Jammwal, Sanjay"
        },
        {
          title:"Yeh Fitoor Mera",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/yeh-fitoor-mera-arijit-singh-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Yeh-Fitoor-Mera-Arijit-Singh-500-500.jpg",
          album:"Fitoor",
          artist:"Arijit Singh",
          description:"Composer: Amit Trivedi && Starcast: Katrina Kaif, Aditya Roy Kapur, Tabu"
        },
        {
          title:"Badtameez Dil",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/badtameez-dil-yeh-jawaani-hai-deewani-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Badtameez-Dil-Yeh-Jawaani-Hai-Deewani-500-500.jpg",
          album:"Yeh Jawaani Hai Deewani",
          artist:"Pritam, Benny Dayal, Shefali Alvares",
          description:"Composer: Pritam && Starcast: Ranbir Kapoor, Deepika Padukone, Aditya Roy Kapur, Kalki Koechlin, Kunaal Roy"
        },
        {
          title:"Ilahi",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/ilahi-yeh-jawaani-hai-deewani-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Ilahi-Yeh-Jawaani-Hai-Deewani-500-500.jpg",
          album:"Yeh Jawaani Hai Deewani",
          artist:"Pritam, Arijit Singh",
          description:"Composer: Pritam && Starcast: Ranbir Kapoor, Deepika Padukone, Aditya Roy Kapur, Kalki Koechlin, Kunaal Roy"
        },
        {
          title:"Ban Ja Rani",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/ban-ja-rani-tumhari-sulu-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Ban-Ja-Rani-Tumhari-Sulu-500-500.jpg",
          album:"Tumhari Sulu",
          artist:"Guru Randhawa",
          description:"Composer: Guru Randhawa, Rajat Nagpal && Starcast: Vidya Balan, Neha Dhupia, Manav Kaul, Malishka"
        },
        {
          title:"Teri Mitti",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/teri-mitti---female-version-kesari-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Teri-Mitti---Female-Version-Kesari-500-500.jpg",
          album:"Kesari",
          artist:"Parineeti Chopra",
          description:"Composer: Arko && Starcast: Akshay Kumar, Parineeti Chopra"
        },
        {
          title:"Ve Maahi",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/ve-maahi-kesari-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Ve-Maahi-Kesari-500-500.jpg",
          album:"Kesari",
          artist:"Asees Kaur, Arijit Singh",
          description:"Composer: Tanishk Bagchi && Starcast: Akshay Kumar, Parineeti Chopra"
        },
        {
          title:"Moh Moh Ke Dhaage",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/moh-moh-ke-dhaage-female-dum-laga-ke-haisha-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Moh-Moh-Ke-Dhaage-Female-Dum-Laga-Ke-Haisha-500-500.jpg",
          album:"Dum Laga Ke Haisha",
          artist:"Monali Thakur, Anu Malik, Varun Grover",
          description:"Composer: Anu Malik && Starcast: Ayushmann Khurrana, Bhumi Pednekar"
        },
        {
          title:"Te Amo",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/te-amo-dum-maaro-dum-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Te-Amo-Dum-Maaro-Dum-500-500.jpg",
          album:"Dum Maaro Dum",
          artist:"Pritam, Sunidhi Chauhan, Ash King",
          description:"Composer: Pritam && Starcast: Anaitha Nair, Abhishek Bachchan, Bipasha Basu, Aditya Pancholi, Prateik"
        },
        {
          title:"Hosanna",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/hosanna-ekk-deewana-tha-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Hosanna-Ekk-Deewana-Tha-500-500.jpg",
          album:"Ekk Deewana Tha",
          artist:"A.R. Rahman, Leon D souza, Suzanne D Mello",
          description:"Composer: A.R. Rahman && Starcast: Prateik Babbar, Amy Jackson"
        },
        {
          title:"Dost Hai Girl I Loved You",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/dost-hai-girl-i-loved-you-ekk-deewana-tha-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Dost-Hai-Girl-I-Loved-You-Ekk-Deewana-Tha-500-500.jpg",
          album:"Ekk Deewana Tha",
          artist:"A.R. Rahman, Naresh Iyer, Jaspreet Singh, Arya",
          description:"Composer: A.R. Rahman && Starcast: Prateik Babbar, Amy Jackson"
        },
        {
          title:"Hale Dil",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/hale-dil-murder-2-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Hale-Dil-Murder-2-500-500.jpg",
          album:"Murder 2",
          artist:"Harshit Saxena",
          description:"Composer: Harshit Saxena && Starcast: Sudhanshu Pandey, Emraan Hashmi, Jacqueline Fernandez, Prashant Narayanan"
        },
        {
          title:"Tera Chehra",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/tera-chehra-sanam-teri-kasam-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Tera-Chehra-Sanam-Teri-Kasam-500-500.jpg",
          album:"Sanam Teri Kasam",
          artist:"Arijit Singh, Himesh Reshammiya",
          description:"Composer: Himesh Reshammiya && Starcast: Harshvardhan Rane, Mawra Hocane, Anurag Sinha, Manish Chaudhary, Murli Sharma, Vijay Raaz, Sudesh Berry, Pyumori Mehta"
        },
        {
          title:" Abhi Toh Party Shuru Hui Hai",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/abhi-toh-party-shuru-hui-hai-khoobsurat-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Abhi-Toh-Party-Shuru-Hui-Hai-Khoobsurat-500-500.jpg",
          album:"Khoobsurat",
          artist:"Badshah, Aastha",
          description:"Composer: Badshah && Starcast: Sonam Kapoor, Fawad Khan, Ratna Pathak, Kirron Kher"
        },
        {
          title:"Gallan Goodiyaan",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/gallan-goodiyaan-dil-dhadakne-do-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Gallan-Goodiyaan-Dil-Dhadakne-Do-500-500.jpg",
          album:"Dil Dhadakne Do",
          artist:"Yashita Sharma, Manish Kumar Tipu, Farhan Akhtar, Shankar Mahadevan, Sukhwinder Singh, Shankar-Ehsaa",
          description:"Composer: Shankar-Ehsaan-Loy && Starcast: Anil Kapoor, Priyanka Chopra, Farhan Akhtar, Anushka Sharma, Ranveer Singh, Shefali Shah"
        },
        {
          title:"Dance Basanti",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/dance-basanti-ungli-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Dance-Basanti-Ungli-500-500.jpg",
          album:"Ungli",
          artist:"Sachin-Jigar, Vishal Dadlani, Anushka Manchanda",
          description:"Composer: Sachin Sanghvi, Jigar Saraiya && Starcast: Randeep Hooda, Emraan Hashmi, Kangana Ranaut, Angad Bedi, Sanjay Dutt, Neil Bhoopalam"
        },
        {
          title:"Navrai Maajhi",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/navrai-maajhi-english-vinglish-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Navrai-Maajhi-English-Vinglish-500-500.jpg",
          album:"English Vinglish",
          artist:"Sunidhi Chauhan, Swanand Kirkire, Neelambari Kirkire, Natalie Di Luccio",
          description:"Composer: Amit Trivedi && Starcast: Sridevi, Adil Hussain, Mehdi Nebbou, Sulabha Deshpande, Priya Anand, Navika Kotia, Shivansh Kotia, Sulabha Deshpande"
        },
        {
          title:"Senorita",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/senorita-zindagi-na-milegi-dobara-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Senorita-Zindagi-Na-Milegi-Dobara-500-500.jpg",
          album:" Zindagi Na Milegi Dobara",
          artist:"Shankar-Ehsaan-Loy, Farhan Akhtar, Hrithik Roshan, Abhay Deol, Maria Del Mar Fernandez",
          description:"Composer: Shankar-Ehsaan-Loy && Starcast: Hrithik Roshan, Katrina Kaif, Abhay Deol, Farhan Akhtar, Kalki Koechlin"
        },
        {
          title:"Party All Night",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/party-all-night-boss-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Party-All-Night-Boss-500-500.jpg",
          album:"Boss",
          artist:"Yo Yo Honey Singh",
          description:"Composer: Yo Yo Honey Singh && Starcast: Akshay Kumar, Aditi Rao Hydari, Mithun Chakraborty, Ronit Roy, Sonakshi Sinha"
        },
        {
          title:"Tum Se Hi",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/tum-se-hi-jab-we-met-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Tum-Se-Hi-Jab-We-Met-500-500.jpg",
          album:"Jab We Met",
          artist:"Pritam, Mohit Chauhan",
          description:"Composer: Pritam && Starcast: Shahid Kapoor, Kareena Kapoor Khan, Dara Singh"
        },
        {
          title:"Kun Faaya Kun",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/kun-faaya-kun-rockstar-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Kun-Faaya-Kun-Rockstar-500-500.jpg",
          album:"Rockstar",
          artist:"A.R. Rahman, Javed Ali, Mohit Chauhan",
          description:"Composer: A.R. Rahman && Starcast: Ranbir Kapoor, Shammi Kapoor, Nargis Fakhri"
        },
        {
          title:"Nadaan Parindey",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/nadaan-parindey-rockstar-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Nadaan-Parindey-Rockstar-500-500.jpg",
          album:"Rockstar",
          artist:"A.R. Rahman, Mohit Chauhan",
          description:"Composer: A.R. Rahman && Starcast: Ranbir Kapoor, Shammi Kapoor, Nargis Fakhri"
        },
        {
          title:"Saadda Haq",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/saadda-haq-featuring-orianthi-panagaris-on-guitars-rockstar-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Saadda-Haq-Featuring-Orianthi-Panagaris-On-Guitars-Rockstar-500-500.jpg",
          album:"Rockstar",
          artist:"A.R. Rahman, Clinton Cerejo, Mohit Chauhan",
          description:"Composer: A.R. Rahman && Starcast: Ranbir Kapoor, Shammi Kapoor, Nargis Fakhri"
        },
        {
          title:"Sun Saathiya",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/sun-saathiya-abcd-2-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Sun-Saathiya-ABCD-2-500-500.jpg",
          album:"ABCD 2",
          artist:"Priya Saraiya, Divya Kumar",
          description:"Composer: Sachin-Jigar && Starcast: Varun Dhawan, Shraddha Kapoor"
        },
        {
          title:"Tera Hone Laga Hoon",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/tera-hone-laga-hoon-ajab-prem-ki-ghazab-kahani-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Tera-Hone-Laga-Hoon-Ajab-Prem-Ki-Ghazab-Kahani-500-500.jpg",
          album:"Ajab Prem Ki Ghazab Kahani",
          artist:"Pritam, Atif Aslam, Alisha China",
          description:"omposer: Pritam, Pritam && Starcast: Ranbir Kapoor, Katrina Kaif"
        },
        {
          title:"Inn Lamhon Ke Daaman Mein",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/inn-lamhon-ke-daaman-mein-jodhaa-akbar-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Inn-Lamhon-Ke-Daaman-Mein-Jodhaa-Akbar-500-500.jpg",
          album:"Jodhaa Akbar",
          artist:"A.R. Rahman, Sonu Nigam, Madhushree",
          description:"Composer: A.R. Rahman && Starcast: Hrithik Roshan, Aishwarya Rai Bachchan"
        },
        {
          title:"Khwaja Mere Khwaja",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/khwaja-mere-khwaja-jodhaa-akbar-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Khwaja-Mere-Khwaja-Jodhaa-Akbar-500-500.jpg",
          album:"Jodhaa Akbar",
          artist:"A.R. Rahman",
          description:"Composer: A.R. Rahman && Starcast: Hrithik Roshan, Aishwarya Rai Bachchan"
        },
        {
          title:"Engine Ki Seeti",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/engine-ki-seeti-khoobsurat-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Engine-Ki-Seeti-Khoobsurat-500-500.jpg",
          album:"Khoobsurat",
          artist:"neha Khanwalkar, Sunidhi Chauhan, Resmi Sateesh",
          description:"Composer: Sneha Khanwalkar && Starcast: Sonam Kapoor, Fawad Khan"
        },
        {
          title:"Preet",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/preet-khoobsurat-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Preet-Khoobsurat-500-500.jpg",
          album:"Khoobsurat",
          artist:"Sneha Khanwalkar, Jasleen Royal",
          description:"Composer: Sneha Khanwalkar && Starcast: Sonam Kapoor, Fawad Khan, Ratna Pathak, Kirron Kher"
        },
        {
          title:"Raabta Title Track",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/raabta-(title-track)-arijit-singh-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Raabta-(Title-Track)-Arijit-Singh-500-500.jpg",
          album:"Raabta 2017",
          artist:"Arijit Singh, Nikhita Gandhi",
          description:"Composer: Pritam && Starcast: Sushant Singh Rajput, Kriti Sanon, Jim Sarbh, Varun Sharma"
        },
        {
          title:"Ik Vaari Aa Jubin Version",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/ik-vaari-aa-(jubin-version)-raabta-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Ik-Vaari-Aa-(Jubin-Version)-Raabta-500-500.jpg",
          album:"Raabta 2017",
          artist:"Jubin Nautiyal",
          description:"Composer: Pritam && Starcast: Sushant Singh Rajput, Kriti Sanon, Jim Sarbh, Varun Sharma"
        },
        {
          title:"Aashiyan",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/aashiyan-barfi-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Aashiyan-Barfi-500-500.jpg",
          album:"Barfi",
          artist:"Pritam, Shreya Ghoshal, Nikhil Paul George",
          description:"Composer: Pritam && Starcast: Ranbir Kapoor, Priyanka Chopra, Ileana DCruz"
        },
        {
          title:"Main Kya Karoon",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/main-kya-karoon-barfi-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Main-Kya-Karoon-Barfi-500-500.jpg",
          album:"Barfi",
          artist:"Pritam, Nikhil Paul George",
          description:"Composer: Pritam && Starcast: Ranbir Kapoor, Priyanka Chopra, Ileana DCruz"
        },
        {
          title:"Duniyaa",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/duniyaa-luka-chuppi-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Duniyaa-Luka-Chuppi-500-500.jpg",
          album:"Luka Chuppi",
          artist:"Akhil, Dhvani Bhanushali",
          description:"Composer: Abhijit Vaghani, Bob && Starcast: Kriti Sanon, Kartik Aryan"
        },
        {
          title:"Bom Diggy Diggy",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/bom-diggy-diggy-sonu-ke-titu-ki-sweety-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Bom-Diggy-Diggy-Sonu-Ke-Titu-Ki-Sweety-500-500.jpg",
          album:"Sonu Ke Titu Ki Sweety",
          artist:"Jasmin Walia, Zack Knight",
          description:"Composer: Zack Knight && Starcast: Sunny Singh Nijjar, Kartik Aaryan, Nushrat Bharucha"
        },
        {
          title:"Tera Yaar Hoon Main",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/tera-yaar-hoon-main-sonu-ke-titu-ki-sweety-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Tera-Yaar-Hoon-Main-Sonu-Ke-Titu-Ki-Sweety-500-500.jpg",
          album:"Sonu Ke Titu Ki Sweety",
          artist:" Arijit Singh",
          description:"Composer: Rochak Kohli && Starcast: Nushrat Bharucha, Kartik Aaryan, Sunny Singh Nijjar"
        },
        {
          title:"Phir Kabhi",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/phir-kabhi-m.s.-dhoni---the-untold-story-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Phir-Kabhi-M.S.-Dhoni---The-Untold-Story-500-500.jpg",
          album:"M.S. Dhoni - The Untold Story",
          artist:"Arijit Singh",
          description:"Composer: Amaal Mallik && Starcast: Sushant Singh Rajput, Kiara Advani, Anupam Kher, Herry Tangiri, Gautam Gulati"
        },
        {
          title:"Kaun Tujhe",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/kaun-tujhe-m.s.-dhoni---the-untold-story-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Kaun-Tujhe-M.S.-Dhoni---The-Untold-Story-500-500.jpg",
          album:"M.S. Dhoni - The Untold Story",
          artist:"Palak Muchhal",
          description:"Composer: Amaal Mallik && Starcast: Sushant Singh Rajput, Kiara Advani, Anupam Kher, Herry Tangiri, Gautam Gulati"
        },
        {
          title:"Kamariya",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/kamariya-mitron-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Kamariya-Mitron-500-500.jpg",
          album:"Mitron",
          artist:"Lijo George, Dj Chetas, Darshan Raval",
          description:"Composer: Lijo George, Dj Chetas && Starcast: Jackky Bhagnani, Kritika Kamra"
        },
        {
          title:"Nagada Sang Dhol",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/nagada-sang-dhol-goliyon-ki-raasleela-ram-leela-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Nagada-Sang-Dhol-Goliyon-Ki-Raasleela-Ram-Leela-500-500.jpg",
          album:"Goliyon Ki Raasleela Ram-Leela",
          artist:"Shreya Ghoshal, Osman Mir",
          description:"Composer: Sanjay Leela Bhansali && Starcast: Ranveer Singh, Deepika Padukone"
        },
        {
          title:"Lahu Munh Lag Gaya",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/lahu-munh-lag-gaya-goliyon-ki-raasleela-ram-leela-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Lahu-Munh-Lag-Gaya-Goliyon-Ki-Raasleela-Ram-Leela-500-500.jpg",
          album:"Goliyon Ki Raasleela Ram-Leela",
          artist:"Shail Hada",
          description:"Composer: Sanjay Leela Bhansali && Starcast: Ranveer Singh, Deepika Padukone"
        },
        {
          title:"Ram Chahe Leela",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/ram-chahe-leela-goliyon-ki-raasleela-ram-leela-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Ram-Chahe-Leela-Goliyon-Ki-Raasleela-Ram-Leela-500-500.jpg",
          album:"Goliyon Ki Raasleela Ram-Leela",
          artist:"Bhoomi Trivedi",
          description:"Composer: Sanjay Leela Bhansali && Starcast: Ranveer Singh, Deepika Padukone"
        },
        {
          title:"Malhari",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/malhari-bajirao-mastani-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Malhari-Bajirao-Mastani-500-500.jpg",
          album:"Bajirao Mastani",
          artist:"Vishal Dadlani, Sanjay Leela Bhansali",
          description:"Composer: Sanjay Leela Bhansali && Starcast: Deepika Padukone, Ranveer Singh"
        },
        {
          title:"Pinga",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/pinga-bajirao-mastani-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Pinga-Bajirao-Mastani-500-500.jpg",
          album:"Bajirao Mastani",
          artist:"Shreya Ghoshal, Vaishali Mhade-Bhaisane, Sanjay Leela Bhansali",
          description:"Composer: Sanjay Leela Bhansali && Starcast: Ranveer Singh, Deepika Padukone, Priyanka Chopra"
        },
        {
          title:"Ek Dil Ek Jaan",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/ek-dil-ek-jaan-padmaavat-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Ek-Dil-Ek-Jaan-Padmaavat-500-500.jpg",
          album:"Padmaavat",
          artist:"Shivam Pathak, Mujtaba Aziz Naza, Kunal Pandit, Farhan Sabri",
          description:"Composer: Sanjay Leela Bhansali && Starcast: Deepika Padukone, Ranveer Singh, Shahid Kapoor, Aditi Rao Hydari, Jim Sarbh"
        },
        {
          title:"Khalibali",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/khalibali-padmaavat-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Khalibali-Padmaavat-500-500.jpg",
          album:"Padmaavat",
          artist:"Shivam Pathak, Shail Hada",
          description:"Composer: Sanjay Leela Bhansali && Starcast: Deepika Padukone, Ranveer Singh, Shahid Kapoor, Aditi Rao Hydari, Jim Sarbh"
        },
        {
          title:"Doobey",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/doobey-gehraiyaan-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/doobey-gehraiyaan-500-500.jpg",
          album:"Gehraiyaan",
          artist:"Lothika",
          description:"Composer: OAFF, Savera && Starcast: Deepika Padukone, Siddhant Chaturvedi"
        },
        {
          title:"Raanjhanaa",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/raanjhanaa-a.r.-rahman-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Raanjhanaa-A.R.-Rahman-500-500.jpg",
          album:"Raanjhanaa",
          artist:"A.R. Rahman, Jaswinder Singh, Shiraz Uppal",
          description:"Composer: A.R. Rahman && Starcast: Dhanush, Sonam Kapoor, Abhay Deol"
        },
        {
          title:"Tum Tak",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/tum-tak-raanjhanaa-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Tum-Tak-Raanjhanaa-500-500.jpg",
          album:"Raanjhanaa",
          artist:"A.R. Rahman, Javed Ali, Kirti Sagathia, A.V. Pooja",
          description:"Composer: A.R. Rahman && Starcast: Dhanush, Sonam Kapoor, Abhay Deol"
        },
        {
          title:"Dil Ibaadat",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/dil-ibaadat-tum-mile-original-motion-picture-soundtrack-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Dil-Ibaadat-Tum-Mile-Original-Motion-Picture-Soundtrack-500-500.jpg",
          album:"Tum Mile 2009",
          artist:"Pritam, KK",
          description:"Composer: Pritam && Starcast: Emraan Hashmi, Soha Ali Khan"
        },
        {
          title:"Tu Hi Haqeeqat",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/tu-hi-haqeeqat-tum-mile-original-motion-picture-soundtrack-128-kbps-sound.mp3",
          imageFile:"https://pagalnew.com/coverimages/Tu-Hi-Haqeeqat-Tum-Mile-Original-Motion-Picture-Soundtrack-500-500.jpg",
          album:"Tum Mile 2009",
          artist:"Pritam, Javed Ali, Irshan Ashraf, Shadab",
          description:"Composer: Pritam && Starcast: Soha Ali Khan, Emraan Hashmi"
        },
      ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('Songs', null, {});
    
  }
};
