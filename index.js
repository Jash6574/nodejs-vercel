import Express from "express";

const app = Express();

app.get('/',(req,res)=>{

    res.json({
        "total_size":15,
        "type_id":2,
        "offset":0,
        "products":[
         //   {
         //      "id":1,
         //      "name":"Biryani",
         //      "description":"If there’s one dish that almost everyone knows in Indian cuisine, it’s biryani. The origin of this aromatic mixture of rice, spices and meat is usually credited to the Mughal kings who once ruled the subcontinent, but it’s now a popular dish all over the country. The meat (and vegetables, if used) and rice are cooked separately before being layered and cooked together with a mixture of spices. The type of meat used varies; goat, chicken, beef, lamb, fish or prawns are used according to the region, with eggs and potatoes sometimes added as well. States across India all cook this quintessential main dish in different styles, with Delhi biryani and Hyderabadi biryani being popular varieties. It is also served with a regional twist in countries such as Pakistan, Bangladesh, Afghanistan and Burma.",
         //      "price":10,
         //      "stars":5,
         //      "img":"https://www.tasteofhome.com/wp-content/uploads/2021/01/the-hyderabadi-chicken-biryani-is-photographed-at-akshaya-168918303.jpg?resize=768,768",
         //      "type_id":2
         //   },
           {
              "id":2,
              "name":"Curry",
              "description":"“Curry” was a blanket term used by the British during the era of colonization for the wide variety of foreign dishes they couldn’t identify. While you might find a generic version of curry in the UK, Indian cuisine simply doesn’t have one singular dish called curry. The word generally refers to a spicy gravy preparation—for example, South Indian-style egg curry, which uses curry leaves and coconut milk, or Konkan fish curry, a coastal preparation heavy on coconut milk and tamarind popular in the states of Maharashtra and Goa. You might also find variations like the Sindhi kadai, a version made from garbanzo bean flour originating in the neighboring country of Pakistan.",
              "price":10,
              "stars":5,
              "img":"https://www.tasteofhome.com/wp-content/uploads/2021/01/Curry-769792415.jpg?resize=768,768",
              "type_id":2
           },
           {
              "id":3,
              "name":"Korma",
              "description":"Like biryani, korma can be traced back to Mughlai cuisine, which specialized in meat-heavy, creamy dishes, though the current milder version most likely originated in the UK. The word comes from the Persian word qorma, which means “braise.” For this preparation, meat (usually chicken) or vegetables are braised over high heat with yogurt or cream, and then cooked long and slow. The dish’s spices are usually tempered by the dairy to make it milder, and much like curry, it has variations in different regions. For example, in South India, dried coconut is often added to the dish.",
              "price":10,
              "stars":5,
              "img":"https://www.tasteofhome.com/wp-content/uploads/2021/01/chicken-curry-with-rice-135585458.jpg?resize=768,768",
              "type_id":2
           },
           {
              "id":4,
              "name":"Lamb Saag",
              "description":"Saag is a term widely used in the northern region of Punjab for any leafy green vegetable dish, and in several regions nearby, including Bengal and Assam in the east. Lamb saag (also known as saag gosht) is usually made with pureed spinach and tender, juicy chunks of lamb with aromatic spices like cumin, cardamom, coriander seeds, ginger and garlic. It gets its signature creaminess from the addition of cream or yogurt. Serve this with naan (leavened, oven-baked flatbread), roti (unleavened flatbread) or parantha (flaky fried flatbread).",
              "price":10,
              "stars":5,
              "img":"https://www.tasteofhome.com/wp-content/uploads/2021/01/lamb-saang-GettyImages-1227500280.jpg?resize=768,768",
              "type_id":2
           },
           {
              "id":5,
              "name":"Rogan Josh",
              "description":"Made for the cold climate of Kashmir, the northernmost state in India, the name rogan josh likely comes from the Urdu words for “red meat.” This spicy braised dish usually uses lamb or mutton and gets its signature color from a large amount of lal mirch (Kashmiri red chilis). Milder than the usual Indian chilis, their paprika-like taste makes this dish a great starting point for anyone new to Indian cuisine. Garlic, ginger, cardamom, bay leaves, cinnamon and cloves make up the rest of the flavor profile, with the spice usually being tempered at the end with a generous helping of yogurt.",
              "price":10,
              "stars":5,
              "img":"https://www.tasteofhome.com/wp-content/uploads/2021/01/Rogan-Josh-1190644860.jpg?resize=768,768",
              "type_id":2
           },
           {
              "id":6,
              "name":"Butter Chicken",
              "description":"If biryani is the most well-known Indian dish, butter chicken (or murgh makhani) is a close second. Like most rich, creamy dishes, this originated in the northern region of India, and was created by Kundan Lal Gujral in the late 1940s. To make this delicious preparation, the chicken is first marinated in yogurt, then browned in a pan before being drenched in a tomato gravy thick with spices like turmeric and garam masala, and of course, plenty of cream. Luckily, it can be whipped up easily in a slow cooker. Pair this with homemade naan for a truly Indian experience!",
              "price":10,
              "stars":5,
              "img":"https://www.tasteofhome.com/wp-content/uploads/2021/01/tasty-butter-chicken-curry-dish-from-indian-cuisine-1277362334.jpg?resize=768,768",
              "type_id":2
           },
           {
              "id":7,
              "name":"Chicken Tikka Masala",
              "description":"This rich, incredibly moist chicken dish differs subtly from butter chicken, and though it’s considered Northern cuisine, it most likely came out of Indian curry houses in the UK. The chicken (either breast or thighs) is marinated (preferably overnight) in a spicy yogurt mixture with turmeric, cumin, ginger, garlic, chilis and garam masala. It’s then cooked over high heat and dunked in a creamy, flavorful tomato and onion gravy made with similar spices, before being served with, of course, a side of naan.",
              "price":10,
              "stars":5,
              "img":"https://www.tasteofhome.com/wp-content/uploads/2021/01/dish-of-indian-cuisine-tikka-masala-chicken-meat-1202124885.jpg?resize=768,768",
              "type_id":2
           },
           {
              "id":8,
              "name":"Chole Bhature",
              "description":"One of the most popular vegetarian North Indian recipes, chole refers to the spicy garbanzo bean and tomato gravy (also known as chana masala), while bhature are the fluffy deep-fried flatbreads served alongside it. Brimming with garam masala, turmeric, red chili powder and dried mango (amchur) powder, the gravy is a tangy delight full of protein, which goes perfectly with soft, crispy bhature. ",
              "price":10,
              "stars":5,
              "img":"https://www.tasteofhome.com/wp-content/uploads/2021/01/close-up-chole-bhature-served-at-table-552154819.jpg?resize=768,768",
              "type_id":2
           },
           {
              "id":9,
              "name":"Dal Makhani",
              "description":"Another popular North Indian vegetarian dish, dal makhani is a creamy preparation made with black lentils (urad dal) and served with roti. The gravy is made with cream and tomato puree, and spiced with cumin, cardamom, cloves, cinnamon, bay leaves, ginger, garlic, red chili powder and sometimes dry fenugreek leaves (kasuri methi). A hot piece of charcoal is sometimes dropped into the final mixture to infuse a smoky flavor into the gravy.",
              "price":10,
              "stars":5,
              "img":"https://www.tasteofhome.com/wp-content/uploads/2021/01/the-hyderabadi-chicken-biryani-is-photographed-at-akshaya-168918303.jpg?resize=768,768",
              "type_id":2
           },
           {
              "id":10,
              "name":"Aloo Gobi",
              "description":"Aloo gobi, which literally translates to potatoes and cauliflower, is a popular vegetarian dish in North India, with regional variants across the country. This light, healthy dish is fully vegan and gets its signature yellow color and delicious flavor from a mixture of cumin seeds, turmeric, dried mango powder, red chili powder, garam masala and coriander powder. In some regions, tomatoes, onions and ginger-garlic paste are added for more flavor. This dry preparation is usually paired with roti. We bet you’ll love these air-fryer Indian recipes.",
              "price":10,
              "stars":5,
              "img":"https://www.tasteofhome.com/wp-content/uploads/2021/01/aloo-gobi-cauliflower-potato-curry-1096057548.jpg?resize=768,768",
              "type_id":2
           },
           {
              "id":11,
              "name":"Palak Paneer",
              "description":"North Indian vegetarian cusine relies often on paneer, or Indian cottage cheese. One of the most popular Indian main dishes involves dunking the creamy cubes into a rich spinach (palak) gravy. The spinach is boiled and pureed, then mixed with tomatoes, garlic and onions before being spiced with chilis, red chili powder, garam masala, turmeric and kasuri methi (dried fenugreek leaves). Some versions also add heavy cream, though this can be skipped. Palak paneer can be served with roti, naan, parantha, makki di roti (unleavened cornmeal bread) or even spooned over rice.",
              "price":10,
              "stars":5,
              "img":"https://www.tasteofhome.com/wp-content/uploads/2021/01/naan-and-curry-1168513878.jpg?resize=768,768",
              "type_id":2
           },
           {
              "id":12,
              "name":"Malai Kofta",
              "description":"You’ve heard of meatballs. Now prepare to meet kofta! In North Indian cuisine, kofta refers to deep fried balls made from vegetables or meat. This dish is made by rolling balls of potato and paneer (Indian cottage cheese) with cashews, raisins, cornstarch and spices and frying them. Then, the balls are dunked in a velvety gravy made of tomatoes, onions, garlic, ginger and green chili, which is cooked with bay leaves, cinnamon, green cardamom, cloves and caraway seeds, with heavy cream added at the end. The preparation is best eaten with garlic naan..",
              "price":10,
              "stars":5,
              "img":"https://www.tasteofhome.com/wp-content/uploads/2021/01/malai-kofta-is-a-mughlai-speciality-dish-640045270.jpg?resize=768,768",
              "type_id":2
           },
           {
              "id":13,
              "name":"Undhiyu",
              "description":"The famously vegetarian-heavy western state of Gujurat thrives on undhiyu, its signature mixed vegetable preparation. The first half of the word, undhu, means upside-down, and refers to the traditional method of cooking it upside down in earthen pots. Vegetables typically used include green beans, purple yams, eggplants, potatoes and plantain, with muthia (spiced chickpea flour dumplings). Some variants include a masala (spice mix) consisting of coconut and peanuts stuffed into the vegetables. A dry curry paste made from cilantro leaves, ginger, garlic, green chili pepper and sugar gives it its flavor, and permeates the mixture as it is slow-cooked. (No earthen pots available? A pressure cooker works just fine).",
              "price":10,
              "stars":5,
              "img":"https://www.tasteofhome.com/wp-content/uploads/2021/01/undhiyu-is-a-gujarati-mixed-vegetable-dish-1177421198.jpg?resize=768,768",
              "type_id":2
           },
           {
              "id":14,
              "name":"Dal Baati Churma",
              "description":"This meal is a mainstay from wartime in the western state of Rajasthan, and while it might take a while to make, the end result is well worth it. Dal (lentils) is a staple of the vegetarian diet, and in this dish, chana dal (split Bengal gram), tuvar dal (arhar) and urad dal (black lentils) are mixed into tomatoes, onions and garlic, and spiced with bay leaves, cloves, cumin seeds, turmeric, garam masala and more Indian spices. This is eaten with baati, baked spiced whole wheat and semolina balls. Historically, soldiers left this underground to bake in the sun and ate them upon their return. Churma, a dish made from whole wheat flour and semolina with cardamom and sugar, rounds off the meal to make a sweet and savory delight.",
              "price":10,
              "stars":5,
              "img":"https://www.tasteofhome.com/wp-content/uploads/2021/01/dal-baati-churma-1145984048.jpg?resize=768,768",
              "type_id":2
           },
           {
              "id":15,
              "name":"Pav Bhaji",
              "description":"Pav bhaji originated in the western state of Maharashtra and is a popular street food, especially in the city of Mumbai. In this dish, the bhaji is a mixture of mashed potatoes, peas and other vegetables in a tomato-based gravy, spiced with cinnamon, cardamom, cloves, red chilis, coriander seeds, fennel and peppercorns. The spice mixture can easily be found in Indian stores, and is usually labeled pav bhaji masala. Pav is a soft Indian roll, though this tasty gravy can be paired with any soft roll (toast it on a pan with plenty of butter for authenticity).",
              "price":10,
              "stars":5,
              "img":"https://www.tasteofhome.com/wp-content/uploads/2021/01/indian-style-pav-bhaji-bread-1196090801.jpg?resize=768,768",
              "type_id":2
           }
        ]
     });
});

app.listen('3000',()=>{
    console.log("port 3000");
})