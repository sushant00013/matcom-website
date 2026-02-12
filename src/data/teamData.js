// Function to generate dynamic avatars based on names
const getAvatar = (name) => `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0D8ABC&color=fff&size=128&bold=true`;

const teamData = [
  {
    title: "Previous Club Coordinators",
    members: [
      {
        name: 'HIMANSHU',
        image: "public/team-images/coordinators/himanshu.jpg", 
        links: { 
          instagram: "https://www.instagram.com/_himanshu_079?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", 
          linkedin: "https://www.linkedin.com/in/himanshudiwaan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
        },
      },
      {
        name: 'SHANCHIT SHARMA',
        image: "public/team-images/coordinators/sanchit.jpg",
        links: { 
          instagram: "https://www.instagram.com/sanchit_s06/", 
          linkedin: "https://www.linkedin.com/in/sanchitsharma06/" 
        },
      },
      {
        name: 'Dharuva Thakur',
        image:"public/team-images/coordinators/Dharuva.png" ,
        links: { 
          instagram: "https://www.instagram.com/dharuva_thakur?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", 
          linkedin: "https://l.instagram.com/?u=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fdharuva-thakur-83576122a%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAaYstVr2D-W5IdWITXQ8pFjf20nfWUgU3Nsls-OtgdRJCrRN1w8nWHuoB88_aem_xnPRszOpmRCrHKH0QSnNkw&e=AT0Beauu4E6xIbrfiLj-aFFBdEiAk6H29-4IsxJ-gud_IFy4D_kvDGMBqjd7K0axOcA4-5QmTUrzllWs5QGkufVYtdqndTd9ckSEU2k" 
        },
      },
      {
        name: "Mehul Aggarwal",
        image: "public/team-images/coordinators/Mehul.jpg",
        links: { 
          instagram: "https://www.instagram.com/mehul_tp26?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", 
          linkedin: "https://www.linkedin.com/in/mehul-aggarwal-47285421b/" 
        },
      },
      {
        name: "Shivansh Joshi",
        image: "public/team-images/final year/SHIVANSHJOSHI_22BMA038.jpg",
        links: { 
          instagram: "https://www.instagram.com/joshi_shivansh27?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", 
          linkedin: "https://www.linkedin.com/in/shivansh-joshi-75870026a/" 
        },
      },
      {
        name: "Krishna Narzary",
        image: "public/team-images/final year/Krishna_22bma015.jpg",
        links: { 
          instagram: "https://www.instagram.com/majuuu___?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", 
          linkedin: "https://www.linkedin.com/in/krishna-narzary-32b74a254/" 
        },
      },
    ],
  },
  
  {
    title: "Final Year",
    members: [
      { 
        name: "Krishna Narzary", 
        image: "public/team-images/final year/Krishna_22bma015.jpg", 
        links: { instagram: "https://www.instagram.com/majuuu___?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", linkedin: "https://www.linkedin.com/in/krishna-narzary-32b74a254/" } 
      },
      { 
        name: "Shivansh Joshi", 
        image: "public/team-images/final year/SHIVANSHJOSHI_22BMA038.jpg", 
        links: { instagram: "https://www.instagram.com/joshi_shivansh27?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", linkedin: "https://www.linkedin.com/in/shivansh-joshi-75870026a/" } 
      },
      { 
        name: "Ujjwal Mittal", 
        image: "public/team-images/final year/Ujjwal_22BMA045.jpg", 
        links: { instagram: "https://www.instagram.com/ujjwal_mittal_0101?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", linkedin: "https://www.linkedin.com/in/ujjwamittal/" } 
      },
      { 
        name: "Dhruv Chauhan", 
        image: "public/team-images/final year/DhruvChauhan_22BMA011.jpg", 
        links: { instagram: "https://www.instagram.com/dhruv_____chauhan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", linkedin: "https://www.linkedin.com/in/dhruvchauhan245/" } 
      },
      { 
        name: "Sushant", 
        image: "public/team-images/final year/susi.jpg", 
        links: { instagram: "https://www.instagram.com/sushant_ii?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", linkedin: "https://www.linkedin.com/in/sushant-bab3b2257/" } 
      },
      { 
        name: "Ritika Yullam", 
        image: "public/team-images/final year/Ritika_22BMA028.jpg", 
        links: { instagram: "https://www.instagram.com/ritikaayullam?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", linkedin: "https://www.linkedin.com/in/ritika-kumari25081/" } 
      },
      { 
        name: "Anshika Bharwal", 
        image: "public/team-images/final year/anshika_22bma006.jpg", 
        links: { instagram: "https://www.instagram.com/anshikabharwal?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", linkedin: "https://www.linkedin.com/in/anshika-bharwal-014672256/" } 
      },
      { 
        name: "Devender Kumar", 
        image:"public/team-images/final year/DevenderKumar_22bma010.jpg", 
        links: { instagram: "https://www.instagram.com/devenderkumar2003?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", linkedin: "https://www.linkedin.com/in/devenderkumar2003/" } 
      },
      { 
        name: "Tanishq Verma", 
        image:"public/team-images/final year/Tanishq_22BMA043.jpg", 
        links: { instagram: "https://www.instagram.com/tanishq_v010?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", linkedin: "https://www.linkedin.com/in/tanishq-verma-nith/" } 
      },
      { 
        name: "Prakriti", 
        image:"public/team-images/final year/prakriti.jpg", 
        links: { instagram: "https://www.instagram.com/prakriti_singh25?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", linkedin: "https://www.linkedin.com/in/prakriti-singh-33991925a/" } 
      },
      { 
        name: "Utkarsh Arora", 
        image: "public/team-images/final year/UtkarshArora_22BMA046.jpg", 
        links: { instagram: "https://www.instagram.com/arthon242?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", linkedin: "https://www.linkedin.com/in/utkarsh-arora-a28bb217a/" } 
      },
    ],
  },
  {
    title: "Pre-Final Year",
    members: [
      { 
        name: "Prince Khandelwal", 
        image: "public/team-images/3rdyear/prince.jpg", 
        links: { instagram: "https://www.instagram.com/prince_khandelwal04?igsh=NWl5aDVlOW5hZDR1", linkedin: "https://www.linkedin.com/in/prince-khandelwal-06147a1b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" } 
      },
      { 
        name: "Lovish Shrail", 
        image: "/team-images/3rdyear/lovish.jpg", 
        links: { instagram: "https://www.instagram.com/lovish_shrail?igsh=MXI2aXR6aWx4OThjcw==", linkedin: "https://www.linkedin.com/in/lovish-shrail-55a8b6269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" } 
      },
      { 
        name: "Ojaswi Jaswal", 
        image: "/team-images/3rdyear/ojaswi.jpg", 
        links: { instagram: "https://www.instagram.com/ojaswi_jaswal?igsh=ZmY3ZWg5bWV3MG13", linkedin: "https://www.linkedin.com/in/ojaswi-jaswal-1b5b80280/" } 
      },
      { 
        name: "Sneha", 
        image: "/team-images/3rdyear/SNEHA.jpg", 
        links: { instagram: "https://www.instagram.com/sneha_rana777?igsh=dWxsZDk4dDNveG1x", linkedin: "https://www.linkedin.com/in/sneha-4a25342b0" } 
      },
      { 
        name: "Rudesh", 
        image: "public/team-images/3rdyear/rudesh.jpg", 
        links: { instagram: "#", linkedin: "https://www.linkedin.com/in/rudesh-kumar-40712b280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" } 
      },
      { 
        name: "Aditya Sangal", 
        image: "public/team-images/3rdyear/AdityaSangal.jpg", 
        links: { instagram: "https://www.instagram.com/adityasangal9/?hl=en", linkedin: "https://www.linkedin.com/in/adityasangal9/" } 
      },
      { 
        name: "Sahil Rana", 
        image: "public/team-images/3rdyear/sahil.jpg", 
        links: { instagram: "https://www.instagram.com/__sa_hil__ra_na__/?igsh=Y3VjaWtoZ3V6djM=", linkedin: "https://www.linkedin.com/in/sahil-rana-49a74828b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" } 
      },
      { 
        name: "Shruti", 
        image:"public/team-images/3rdyear/shruti.jpg", 
        links: { instagram: "https://www.instagram.com/0802_shruti?igsh=MWlwZjZqbXowZzd0eg==", linkedin: "https://www.linkedin.com/in/shruti-ranjan-196a072a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" } 
      },
      { 
        name: "Jaspreet Walia", 
        image: "public/team-images/3rdyear/jaspreet.jpg", 
        links: { instagram: "https://www.instagram.com/jass24.walia/?hl=en", linkedin: "https://www.linkedin.com/in/jaspreet-walia-8a9124295/" } 
      },
      { 
        name: "Srishti", 
        image: "public/team-images/3rdyear/srishti.jpg", 
        links: { instagram: "https://www.instagram.com/__srishtinegi_08?igsh=MWFxOXQxa2RnNjZnNw==", linkedin: "https://www.linkedin.com/in/srishti-3405702b0" } 
      },
      { 
        name: "Akshay Kumar", 
        image: "public/team-images/3rdyear/akshaykumar.jpg", 
        links: { instagram: "https://www.instagram.com/__akshay.___._/?hl=en", linkedin: "https://www.linkedin.com/in/akshay-kumar-b06063179/" } 
      },
      { 
        name: "Akshay Anand", 
        image: "public/team-images/3rdyear/akshaymec.jpg", 
        links: { instagram: "https://www.instagram.com/whysoaksh?igsh=MXNqYndjNHBxN29nNw==", linkedin: "https://www.linkedin.com/in/akshay-anand-46856a2ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" } 
      },
      { 
        name: "Nikhilesh Sahu", 
        image: "public/team-images/3rdyear/nikhilesh.jpg", 
        links: { instagram: "https://www.instagram.com/nikhusahu21?igsh=MTBob3VxcDhtaml4", linkedin: "https://www.linkedin.com/in/nikhilesh-sahu-232b32288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" } 
      },
      { 
        name: "Nitin Thakur", 
        image: "public/team-images/3rdyear/NitinThakur.jpg", 
        links: { instagram: "https://www.instagram.com/iamnitin_026/", linkedin: "https://www.linkedin.com/in/nitin-thakur-3a8a572a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" } 
      },
      { 
        name: "Ramit", 
        image: "public/team-images/3rdyear/ramit.jpg", 
        links: { instagram: "https://www.instagram.com/_w_i_z_00?igsh=dXltMnhwamZyYTg=", linkedin: "https://www.linkedin.com/in/ramit-0-b62329349?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" } 
      },
      { 
        name: "Aryan Soni", 
        image: "public/team-images/3rdyear/aryansoni.jpg", 
        links: { instagram: "https://www.instagram.com/introspective_aryan/", linkedin: "https://www.linkedin.com/in/aryan-soni-6bbb5b270/" } 
      },
      { 
        name: "Vinayak Sharma", 
        image: "public/team-images/3rdyear/vinayak.jpg", 
        links: { instagram: "https://www.instagram.com/_vinayak.79?igsh=bmU1dTF5NmR0ZDNu", linkedin: "https://www.linkedin.com/in/vinayak-sharma-b80a59294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" } 
      },
      { 
        name: "Raman Kumar", 
        image: "public/team-images/3rdyear/RamanKumar.jpg", 
        links: { instagram: "https://www.instagram.com/ramankumar_99/?hl=en ", linkedin: "https://www.linkedin.com/in/raman-kumar-ab6451290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" } 
      },
      { 
        name: "Dipanshi Gupta", 
        image: "/team-images/3rdyear/DipanshiGupta.jpg", 
        links: { instagram: "https://www.instagram.com/dipanshi_369/?hl=en", linkedin: "https://www.linkedin.com/in/dipanshi-gupta-67157428a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" } 
      },
      { 
        name: "Nikhil Rana", 
        image: "public/team-images/3rdyear/nikhil.jpg", 
        links: { instagram: "https://www.instagram.com/rana_nikhil?igsh=bGF5ODB0ODd5ZTd4", linkedin: "https://www.linkedin.com/in/nikhil-rana-458735281/" } 
      },
      { 
        name: "Ansh Pujara", 
        image:"public/team-images/3rdyear/ansh.jpg", 
        links: { instagram: "https://www.instagram.com/pujara.ansh/?hl=en", linkedin: "https://www.linkedin.com/in/ansh-pujara-48656b291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" } 
      },
      { 
        name: "Sarthak", 
        image:"public/team-images/3rdyear/SARTHAK.jpg", 
        links: { instagram: "#", linkedin: "#" } 
      },
      { 
        name: "Arushi Dhiman", 
        image: "public/team-images/3rdyear/arushi.jpg", 
        links: { instagram: "https://www.instagram.com/arus_hi7455?igsh=bTF6djgyODV5eGQ2&utm_source=ig_contact_invite", linkedin: "https://www.linkedin.com/in/akshay-anand-46856a2ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" } 
      },
      { 
        name: "Tsewang Gyatso", 
        image: "", 
        links: { instagram: "#", linkedin: "#" } 
      },
    ],
  },
  {
    title: "2nd Year",
    members: [
      { 
        name: "Aastha Chaudhary", 
        image: "/team-images/2ndyear/AasthaChoudhary.jpg", 
        links: { instagram: "https://www.instagram.com/aasthachoudhary_01?igsh=MXU2NzFsaXVmaHFvOQ==", linkedin: "https://www.linkedin.com/in/aastha-choudhary-1a808b335/" } 
      },
      { 
        name: "Aditya Negi", 
        image:"/team-images/2ndyear/AadityaNegi.jpg", 
        links: { instagram: "https://www.instagram.com/adityanegi103.5?igsh=eDV0dzBhcjJyMDBn&utm_source=qr", linkedin: "https://www.linkedin.com/in/aditya-negi31?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" } 
      },
      { 
        name: "Komal Choudhary", 
        image:"public/team-images/2ndyear/KomalChoudhary.jpg", 
        links: { instagram: "https://www.instagram.com/komal_choudhary2006?igsh=Z3JnemtnZGZxenZy", linkedin: "https://www.linkedin.com/in/komal-choudhary-9b9878334?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" } 
      },
      { 
        name: "Kunal Thakur", 
        image: "public/team-images/2ndyear/kunalthakur.jpg", 
        links: { instagram: "https://www.instagram.com/_.thakurkunal._/#", linkedin: "https://www.linkedin.com/in/kunal-thakur-2248b1334/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BRW%2Fi1ztKSc6Z4pcjdx0QfQ%3D%3D" } 
      },
      { 
        name: "Shreyans Jain", 
        image:"public/team-images/2ndyear/SHREYANSJAIN.jpg" , 
        links: { instagram: "https://www.instagram.com/shreyans1805?igsh=MTRxN3p3MWZjcmc4NQ==", linkedin: "https://www.linkedin.com/in/shreyans-jain-0b1170325/?lipi=urn%3Ali%3Apage%3Ap_mwlite_my_network%3B%2BFifvY%2FHTemSh%2BgtDysE1w%3D%3D" } 
      },
      { 
        name: "Sushant Yadav", 
        image: "public/team-images/2ndyear/sushant.jpg", 
        links: { instagram: "https://www.instagram.com/heree_sushant?igsh=YTRzNTh1cW1waTAw", linkedin: "https://www.linkedin.com/in/sushant-yadav-a929aa322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" } 
      },
      { 
        name: "Anilove", 
        image: "", 
        links: { instagram: "#", linkedin: "#" } 
      },
      { 
        name: "Bhagat Singh Siddhu", 
        image: "", 
        links: { instagram: "#", linkedin: "#" } 
      },
      { 
        name: "Tanisha Chandok", 
        image: "", 
        links: { instagram: "#", linkedin: "#" } 
      },
      { 
        name: "Abhishek", 
        image: "public/team-images/2ndyear/abhishek.jpg", 
        links: { instagram: "#", linkedin: "#" } 
      },
    ],
  },
 {
  title: "1st year",
  members: [
    {
    name: "Prince Namdeo",
    role: "Executive Member",
    category: "1st Year",
    image: "/team-images/1styear/Prince.jpg",
    socials: {
      instagram: "https://www.instagram.com/prince603556?igsh=MTJyZmtlcGQyNTFhcw==",
      linkedin: "https://www.linkedin.com/in/prince-namdeo-4a132838a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    }
  },
  {
    name: "Krishna Nautiyal",
    role: "Executive Member",
    category: "1st Year",
    image: "/team-images/1styear/Krishna.jpg",
    socials: {
      instagram: "https://www.instagram.com/_krishnnaaa_65/",
      linkedin: "https://in.linkedin.com/in/krishna-nautiyal-25247738b"
    }
  },
  {
    name: "Mehul Gupta",
    role: "Executive Member",
    category: "1st Year",
    image: "/team-images/1styear/Mehul Gupta.jpg",
    socials: {
      instagram: "https://www.instagram.com/me_mehulg?igsh=MWcxOTk3YnpwMTFtcg==",
      linkedin: "https://www.linkedin.com/in/mehul-gupta-65a148383?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    }
  },
  {
    name: "Abhishek Katariya",
    role: "Executive Member",
    category: "1st Year",
    image: "/team-images/1styear/Abhishek katariya .jpg", // Note the space before .jpg as per your image
    socials: {
      instagram: "https://www.instagram.com/its_abhi_5201?igsh=MTN5Nzd1cHIxNXJzYg==",
      linkedin: "https://www.linkedin.com/in/abhi-katariya-b88a1537b"
    }
  },
  {
    name: "Abhay Choudhary",
    role: "Executive Member",
    category: "1st Year",
    image: "/team-images/1styear/Abhay CHOUDHARY.jpg",
    socials: {
      instagram: "#",
      linkedin: "https://www.linkedin.com/in/abhay-choudhary-3900a5381?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    }
  },
  {
    name: "Ocean Chauhan",
    role: "Executive Member",
    category: "1st Year",
    image: "/team-images/1styear/Ocean_Chauhan.jpg",
    socials: {
      instagram: "https://www.instagram.com/ocean8_26/",
      linkedin: "https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav"
    }
  },
  {
    name: "Kanika Beniwal",
    role: "Executive Member",
    category: "1st Year",
    image: "/team-images/1styear/Kanika Beniwal.jpg",
    socials: {
      instagram: "https://www.instagram.com/kanikabeniwal06?igsh=bnp4d2VjcXFpOWsz",
      linkedin: "https://www.linkedin.com/in/kanika-beniwal-2a5a85381"
    }
  },
  {
    name: "Arju Alam",
    role: "Executive Member",
    category: "1st Year",
    image: "/team-images/1styear/arju.jpg", 
    socials: {
      instagram: "https://www.instagram.com/arjualam_009?igsh=MXV6eXJ6eW12NHN2cA==",
      linkedin: "https://www.linkedin.com/in/arju-alam-931716375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    }
  },
  {
    name: "Piyush Choudhary",
    role: "Executive Member",
    category: "1st Year",
    image: "/team-images/1styear/Piyush.jpg",
    socials: {
      instagram: "https://www.instagram.com/piyuxh_007?igsh=cWZ0MnB1Yzluem52",
      linkedin: "https://www.linkedin.com/in/piyuxh07?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    }
  },
  {
    name: "Arpit Thakur",
    role: "Executive Member",
    category: "1st Year",
    image: "/team-images/1styear/Arpit_Thakur.jpg",
    socials: {
      instagram: "https://www.instagram.com/arpit_thakur4589?igsh=MWdmdDNjMjh4cnM3MA==",
      linkedin: "https://www.linkedin.com/in/arpit-thakur-43bb48396?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    }
  },
  {
    name: "Akshat Rajput",
    role: "Executive Member",
    category: "1st Year",
    image: "/team-images/1styear/Akshat_rajput.jpg",
    socials: {
      instagram: "https://www.instagram.com/akshatrajput273?igsh=MTJ5cTUwaWNlaXExaw==",
      linkedin: "https://www.linkedin.com/in/akshat-rajput-84549a377/"
    }
  },
  {
    name: "Adit",
    role: "Executive Member",
    category: "1st Year",
    image: "/team-images/1styear/ADIT.jpg", 
    socials: {
      instagram: "https://www.instagram.com/freakinkanav?igsh=MXY0Mm8wcmRtaG5jcA==",
      linkedin: "https://www.linkedin.com/in/kanav-k-85a35038b?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    }
  },
  {
    name: "Pushkar",
    role: "Executive Member",
    category: "1st Year",
    image: "/team-images/1styear/Pushkar.jpg",
    socials: {
      instagram: "https://www.instagram.com/freakinkanav?igsh=MXY0Mm8wcmRtaG5jcA==",
      linkedin: "https://www.linkedin.com/in/kanav-k-85a35038b?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    }
  },
  {
    name: "Kanav",
    role: "Executive Member",
    category: "1st Year",
    image: "/team-images/1styear/kanav.jpg", 
    socials: {
      instagram: "https://www.instagram.com/freakinkanav?igsh=MXY0Mm8wcmRtaG5jcA==",
      linkedin: "https://www.linkedin.com/in/kanav-k-85a35038b?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    }
  },
  ]
}

];

export default teamData;