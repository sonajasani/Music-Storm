"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Songs",
      [
        {
          title:"Manali Trance",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/manali-trance-the-shaukeens-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Manali-Trance-The-Shaukeens-500-500.jpg",
          album:"The Shaukeens",
          artist:"Lil Golu, Neha Kakkar",
          genre:"Party Song",
          userId: 1
        },
        {
          title:"Chaar Bottle Vodka",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/chaar-botal-vodka-ragini-mms-2-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Chaar-Botal-Vodka-Ragini-MMS-2-500-500.jpg",
          album:"Ragini MMS 2",
          artist:"Yo Yo Honey Singh",
          genre:"Party Song",
          userId: 2
        },
        {
          title:"Agar Tum Saath Ho",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/agar-tum-saath-ho-tamasha-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/album/tamasha-500-500.jpg",
          album:"Tamasha",
          artist:"Alka Yagnik, Arijit Singh",
          genre:"Sad Song",
          userId: 3
        },
        {
          title:"Matargashti",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/matargashti-tamasha-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/album/tamasha-500-500.jpg",
          album:"Tamasha",
          artist:"Mohit Chauhan, A.R. Rahman",
          genre:"Fun Song",
          userId: 1
        },
        {
          title:"The Breakup Song",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/the-breakup-song-ae-dil-hai-mushkil-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/The-Breakup-Song-Ae-Dil-Hai-Mushkil-500-500.jpg",
          album:"Ae Dil Hai Mushkil",
          artist:"Pritam, Arijit Singh",
          genre:"Sad Song",
          userId: 2
        },
        {
          title:"Ae Dil Hai Mushkil",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/ae-dil-hai-mushkil-title-track-pritam-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Ae-Dil-Hai-Mushkil-Title-Track-Pritam-500-500.jpg",
          album:"Ae Dil Hai Mushkil",
          artist:"Pritam, Arijit Singh",
          genre:"Sad Song",
          userId: 3
        },
        {
          title:"Mere Rashke Qamar",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/mere-rashke-qamar-baadshaho-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Mere-Rashke-Qamar-Baadshaho-500-500.jpg",
          album:"Baadshaho",
          artist:"Nusrat & Rahat Fateh Ali Khan",
          genre:"Romantic Song",
          userId: 1
        },
        {
          title:"Piya More",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/piya-more-baadshaho-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Piya-More-Baadshaho-500-500.jpg",
          album:"Baadshaho",
          artist:"Mika Singh, Neeti Mohan",
          genre:"Fun Song",
          userId: 2
        },
        {
          title:"Yeh Fitoor Mera",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/yeh-fitoor-mera-arijit-singh-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Yeh-Fitoor-Mera-Arijit-Singh-500-500.jpg",
          album:"Fitoor",
          artist:"Arijit Singh",
          genre:"Romantic Song",
          userId: 3
        },
        {
          title:"Badtameez Dil",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/badtameez-dil-yeh-jawaani-hai-deewani-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Badtameez-Dil-Yeh-Jawaani-Hai-Deewani-500-500.jpg",
          album:"Yeh Jawaani Hai Deewani",
          artist:"Pritam, Benny Dayal",
          genre:"Party Song",
          userId: 1
        },
        {
          title:"Ilahi",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/ilahi-yeh-jawaani-hai-deewani-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Ilahi-Yeh-Jawaani-Hai-Deewani-500-500.jpg",
          album:"Yeh Jawaani Hai Deewani",
          artist:"Pritam, Arijit Singh",
          genre:"----",
          userId: 2
        },
        {
          title:"Ban Ja Rani",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/ban-ja-rani-tumhari-sulu-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Ban-Ja-Rani-Tumhari-Sulu-500-500.jpg",
          album:"Tumhari Sulu",
          artist:"Guru Randhawa",
          genre:"Fun Song",
          userId: 3
        },
        {
          title:"Teri Mitti",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/teri-mitti---female-version-kesari-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Teri-Mitti---Female-Version-Kesari-500-500.jpg",
          album:"Kesari",
          artist:"Parineeti Chopra",
          genre:"Patriotic Song",
          userId: 1
        },
        {
          title:"Ve Maahi",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/ve-maahi-kesari-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Ve-Maahi-Kesari-500-500.jpg",
          album:"Kesari",
          artist:"Asees Kaur, Arijit Singh",
          genre:"Romantic Song",
          userId: 2
        },
        {
          title:"Moh Moh Ke Dhaage",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/moh-moh-ke-dhaage-female-dum-laga-ke-haisha-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Moh-Moh-Ke-Dhaage-Female-Dum-Laga-Ke-Haisha-500-500.jpg",
          album:"Dum Laga Ke Haisha",
          artist:"Monali Thakur, Anu Malik",
          genre:"Romantic Song",
          userId: 3
        },
        {
          title:"Te Amo",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/te-amo-dum-maaro-dum-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Te-Amo-Dum-Maaro-Dum-500-500.jpg",
          album:"Dum Maaro Dum",
          artist:"Pritam, Sunidhi Chauhan",
          genre:"Love Song",
          userId: 1
        },
        {
          title:"Hosanna",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/hosanna-ekk-deewana-tha-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Hosanna-Ekk-Deewana-Tha-500-500.jpg",
          album:"Ekk Deewana Tha",
          artist:"A.R. Rahman",
          genre:"Love Song",
          userId: 2
        },
        {
          title:"Dost Hai Girl I Loved You",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/dost-hai-girl-i-loved-you-ekk-deewana-tha-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Dost-Hai-Girl-I-Loved-You-Ekk-Deewana-Tha-500-500.jpg",
          album:"Ekk Deewana Tha",
          artist:"A.R. Rahman",
          genre:"----",
          userId: 3
        },
        {
          title:"Hale Dil",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/hale-dil-murder-2-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Hale-Dil-Murder-2-500-500.jpg",
          album:"Murder 2",
          artist:"Harshit Saxena",
          genre:"Love Song",
          userId: 1
        },
        {
          title:"Tera Chehra",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/tera-chehra-sanam-teri-kasam-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Tera-Chehra-Sanam-Teri-Kasam-500-500.jpg",
          album:"Sanam Teri Kasam",
          artist:"Arijit Singh, Himesh Reshammiya",
          genre:"Romantic Song",
          userId: 2
        },
        {
          title:" Abhi Toh Party Shuru Hui Hai",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/abhi-toh-party-shuru-hui-hai-khoobsurat-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Abhi-Toh-Party-Shuru-Hui-Hai-Khoobsurat-500-500.jpg",
          album:"Khoobsurat",
          artist:"Badshah, Aastha",
          genre:"Party Song",
          userId: 3
        },
        {
          title:"Gallan Goodiyaan",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/gallan-goodiyaan-dil-dhadakne-do-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Gallan-Goodiyaan-Dil-Dhadakne-Do-500-500.jpg",
          album:"Dil Dhadakne Do",
          artist:"Yashita Sharma",
          genre:"Party Song",
          userId: 1
        },
        {
          title:"Dance Basanti",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/dance-basanti-ungli-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Dance-Basanti-Ungli-500-500.jpg",
          album:"Ungli",
          artist:"Sachin-Jigar, Vishal Dadlani",
          genre:"Party Song",
          userId: 2
        },
        {
          title:"Navrai Maajhi",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/navrai-maajhi-english-vinglish-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Navrai-Maajhi-English-Vinglish-500-500.jpg",
          album:"English Vinglish",
          artist:"Sunidhi Chauhan",
          genre:"Fun Song",
          userId: 3
        },
        {
          title:"Senorita",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/senorita-zindagi-na-milegi-dobara-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Senorita-Zindagi-Na-Milegi-Dobara-500-500.jpg",
          album:" Zindagi Na Milegi Dobara",
          artist:"Shankar-Ehsaan-Loy",
          genre:"Fun Song",
          userId: 1
        },
        {
          title:"Party All Night",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/party-all-night-boss-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Party-All-Night-Boss-500-500.jpg",
          album:"Boss",
          artist:"Yo Yo Honey Singh",
          genre:"Party Song",
          userId: 2
        },
        {
          title:"Tum Se Hi",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/tum-se-hi-jab-we-met-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Tum-Se-Hi-Jab-We-Met-500-500.jpg",
          album:"Jab We Met",
          artist:"Pritam, Mohit Chauhan",
          genre:"Romantic Song",
          userId: 3
        },
        {
          title:"Kun Faaya Kun",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/kun-faaya-kun-rockstar-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Kun-Faaya-Kun-Rockstar-500-500.jpg",
          album:"Rockstar",
          artist:"A.R. Rahman, Javed Ali",
          genre:"Prayer Kind of Song",
          userId: 1
        },
        {
          title:"Nadaan Parindey",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/nadaan-parindey-rockstar-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Nadaan-Parindey-Rockstar-500-500.jpg",
          album:"Rockstar",
          artist:"A.R. Rahman, Mohit Chauhan",
          genre:"Sad Song",
          userId: 2
        },
        {
          title:"Saadda Haq",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/saadda-haq-featuring-orianthi-panagaris-on-guitars-rockstar-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Saadda-Haq-Featuring-Orianthi-Panagaris-On-Guitars-Rockstar-500-500.jpg",
          album:"Rockstar",
          artist:"A.R. Rahman, Clinton Cerejo",
          genre:"Angry Song",
          userId: 3
        },
        {
          title:"Sun Saathiya",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/sun-saathiya-abcd-2-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Sun-Saathiya-ABCD-2-500-500.jpg",
          album:"ABCD 2",
          artist:"Priya Saraiya, Divya Kumar",
          genre:"Romantic Song",
          userId: 1
        },
        {
          title:"Tera Hone Laga Hoon",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/tera-hone-laga-hoon-ajab-prem-ki-ghazab-kahani-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Tera-Hone-Laga-Hoon-Ajab-Prem-Ki-Ghazab-Kahani-500-500.jpg",
          album:"Ajab Prem Ki Ghazab Kahani",
          artist:"Pritam, Atif Aslam",
          genre:"Romantic Song",
          userId: 2
        },
        {
          title:"Inn Lamhon Ke Daaman Mein",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/inn-lamhon-ke-daaman-mein-jodhaa-akbar-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Inn-Lamhon-Ke-Daaman-Mein-Jodhaa-Akbar-500-500.jpg",
          album:"Jodhaa Akbar",
          artist:"A.R. Rahman, Sonu Nigam",
          genre:"Love Song",
          userId: 3
        },
        {
          title:"Khwaja Mere Khwaja",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/khwaja-mere-khwaja-jodhaa-akbar-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Khwaja-Mere-Khwaja-Jodhaa-Akbar-500-500.jpg",
          album:"Jodhaa Akbar",
          artist:"A.R. Rahman",
          genre:"Prayer kind of Song",
          userId: 1
        },
        {
          title:"Engine Ki Seeti",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/engine-ki-seeti-khoobsurat-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Engine-Ki-Seeti-Khoobsurat-500-500.jpg",
          album:"Khoobsurat",
          artist:"neha Khanwalkar",
          genre:"Fun Song",
          userId: 2
        },
        {
          title:"Preet",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/preet-khoobsurat-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Preet-Khoobsurat-500-500.jpg",
          album:"Khoobsurat",
          artist:"Sneha Khanwalkar, Jasleen Royal",
          genre:"Breakup Song",
          userId: 3
        },
        {
          title:"Raabta Title Track",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/raabta-(title-track)-arijit-singh-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Raabta-(Title-Track)-Arijit-Singh-500-500.jpg",
          album:"Raabta 2017",
          artist:"Arijit Singh, Nikhita Gandhi",
          genre:"Love Song",
          userId: 1
        },
        {
          title:"Ik Vaari Aa Jubin Version",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/ik-vaari-aa-(jubin-version)-raabta-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Ik-Vaari-Aa-(Jubin-Version)-Raabta-500-500.jpg",
          album:"Raabta 2017",
          artist:"Jubin Nautiyal",
          genre:"Romantic Song",
          userId: 2
        },
        {
          title:"Aashiyan",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/aashiyan-barfi-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Aashiyan-Barfi-500-500.jpg",
          album:"Barfi",
          artist:"Pritam, Shreya Ghoshal",
          genre:"----",
          userId: 3
        },
        {
          title:"Main Kya Karoon",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/main-kya-karoon-barfi-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Main-Kya-Karoon-Barfi-500-500.jpg",
          album:"Barfi",
          artist:"Pritam, Nikhil Paul George",
          genre:"Love Song",
          userId: 1
        },
        {
          title:"Duniyaa",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/duniyaa-luka-chuppi-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Duniyaa-Luka-Chuppi-500-500.jpg",
          album:"Luka Chuppi",
          artist:"Akhil, Dhvani Bhanushali",
          genre:"Love song",
          userId: 2
        },
        {
          title:"Bom Diggy Diggy",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/bom-diggy-diggy-sonu-ke-titu-ki-sweety-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Bom-Diggy-Diggy-Sonu-Ke-Titu-Ki-Sweety-500-500.jpg",
          album:"Sonu Ke Titu Ki Sweety",
          artist:"Jasmin Walia, Zack Knight",
          genre:"Party Song",
          userId: 3
        },
        {
          title:"Tera Yaar Hoon Main",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/tera-yaar-hoon-main-sonu-ke-titu-ki-sweety-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Tera-Yaar-Hoon-Main-Sonu-Ke-Titu-Ki-Sweety-500-500.jpg",
          album:"Sonu Ke Titu Ki Sweety",
          artist:" Arijit Singh",
          genre:"Romantic Song",
          userId: 1
        },
        {
          title:"Phir Kabhi",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/phir-kabhi-m.s.-dhoni---the-untold-story-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Phir-Kabhi-M.S.-Dhoni---The-Untold-Story-500-500.jpg",
          album:"M.S. Dhoni",
          artist:"Arijit Singh",
          genre:"Romantic Song",
          userId: 2
        },
        {
          title:"Kaun Tujhe",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/kaun-tujhe-m.s.-dhoni---the-untold-story-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Kaun-Tujhe-M.S.-Dhoni---The-Untold-Story-500-500.jpg",
          album:"M.S. Dhoni",
          artist:"Palak Muchhal",
          genre:"Romantic Song",
          userId: 3
        },
        {
          title:"Kamariya",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/kamariya-mitron-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Kamariya-Mitron-500-500.jpg",
          album:"Mitron",
          artist:"Lijo George, Darshan Raval",
          genre:"Garba Song",
          userId: 1
        },
        {
          title:"Nagada Sang Dhol",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/nagada-sang-dhol-goliyon-ki-raasleela-ram-leela-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Nagada-Sang-Dhol-Goliyon-Ki-Raasleela-Ram-Leela-500-500.jpg",
          album:"Goliyon Ki Raasleela Ram-Leela",
          artist:"Shreya Ghoshal, Osman Mir",
          genre:"Garba Song",
          userId: 2
        },
        {
          title:"Lahu Munh Lag Gaya",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/lahu-munh-lag-gaya-goliyon-ki-raasleela-ram-leela-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Lahu-Munh-Lag-Gaya-Goliyon-Ki-Raasleela-Ram-Leela-500-500.jpg",
          album:"Goliyon Ki Raasleela Ram-Leela",
          artist:"Shail Hada",
          genre:"Garba Song",
          userId: 3
        },
        {
          title:"Ram Chahe Leela",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/ram-chahe-leela-goliyon-ki-raasleela-ram-leela-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Ram-Chahe-Leela-Goliyon-Ki-Raasleela-Ram-Leela-500-500.jpg",
          album:"Goliyon Ki Raasleela Ram-Leela",
          artist:"Bhoomi Trivedi",
          genre:"Fun Song",
          userId: 1
        },
        {
          title:"Malhari",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/malhari-bajirao-mastani-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Malhari-Bajirao-Mastani-500-500.jpg",
          album:"Bajirao Mastani",
          artist:"Vishal Dadlani",
          genre:"Party Song",
          userId: 2
        },
        {
          title:"Pinga",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/pinga-bajirao-mastani-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Pinga-Bajirao-Mastani-500-500.jpg",
          album:"Bajirao Mastani",
          artist:"Shreya Ghoshal",
          genre:"Traditional Song",
          userId: 3
        },
        {
          title:"Ek Dil Ek Jaan",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/ek-dil-ek-jaan-padmaavat-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Ek-Dil-Ek-Jaan-Padmaavat-500-500.jpg",
          album:"Padmaavat",
          artist:"Shivam Pathak",
          genre:"Love Song",
          userId: 1
        },
        {
          title:"Khalibali",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/khalibali-padmaavat-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Khalibali-Padmaavat-500-500.jpg",
          album:"Padmaavat",
          artist:"Shivam Pathak, Shail Hada",
          genre:"Party Song",
          userId: 2
        },
        {
          title:"Doobey",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/doobey-gehraiyaan-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/doobey-gehraiyaan-500-500.jpg",
          album:"Gehraiyaan",
          artist:"Lothika",
          genre:"----",
          userId: 3
        },
        {
          title:"Raanjhanaa",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/raanjhanaa-a.r.-rahman-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Raanjhanaa-A.R.-Rahman-500-500.jpg",
          album:"Raanjhanaa",
          artist:"A.R. Rahman",
          genre:"Love Song",
          userId: 1
        },
        {
          title:"Tum Tak",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/tum-tak-raanjhanaa-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Tum-Tak-Raanjhanaa-500-500.jpg",
          album:"Raanjhanaa",
          artist:"A.R. Rahman",
          genre:"Love Song",
          userId: 2
        },
        {
          title:"Dil Ibaadat",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/dil-ibaadat-tum-mile-original-motion-picture-soundtrack-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Dil-Ibaadat-Tum-Mile-Original-Motion-Picture-Soundtrack-500-500.jpg",
          album:"Tum Mile 2009",
          artist:"Pritam, KK",
          genre:"Romantic Song",
          userId: 3
        },
        {
          title:"Tu Hi Haqeeqat",
          audioFile:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/tu-hi-haqeeqat-tum-mile-original-motion-picture-soundtrack-128-kbps-sound.mp3",
          imgUrl:"https://pagalnew.com/coverimages/Tu-Hi-Haqeeqat-Tum-Mile-Original-Motion-Picture-Soundtrack-500-500.jpg",
          album:"Tum Mile 2009",
          artist:"Pritam, Javed Ali",
          genre:"Romantic Song",
          userId: 1
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
  
    return queryInterface.bulkDelete("Songs", null, {});
  },
};
