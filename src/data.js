function data(products_data){
    switch (products_data){
        case "products":
            const products =[
                {
                    id_category: 1,
                    name:"LUMIX DMC G20",
                    img:"https://www.juzaphoto.com/shared_files/recensioni/panasonic_tz40.jpg",
                    detail:"DIGITAL CAMERA NEW",
                    price: 3000
                },
                {
                    id_category: 1,
                    name:"LUMIX DMC G20",
                    img:"https://global.canon/ja/c-museum/wp-content/uploads/2015/05/dvc766_b.jpg",
                    detail:"DIGITAL CAMERA HOT",
                    price: 3000
                },
                {
                    id_category: 1,
                    name:"LUMIX DMC G20",
                    img:"https://m.media-amazon.com/images/I/51LLnj-C+mL.jpg",
                    detail:"DIGITAL CAMERA OLD",
                    price: 3000
                },
                {
                    id_category: 1,
                    name:"LUMIX DMC G20",
                    img:"https://www.bhphotovideo.com/images/images500x500/Panasonic_DMCFX12K_Lumix_DMC_FX12_Digital_Camera_521176.jpg",
                    detail:"DIGITAL CAMERA NEW",
                    price: 3000
                },
                {
                    id_category: 2,
                    name:"Đồng hồ thông minh A1 plus",
                    img:"http://img.websosanh.vn/v2/users/review/images/top-dong-ho-thong-minh-nu-mau/ydr05asvjxa49.jpg",
                    detail:"Apple watch",
                    price: 5000000
                },
                {
                    id_category: 2,
                    name:"Đồng hồ thông minh A2 plus",
                    img:"https://i1-sohoa.vnecdn.net/2021/12/15/Huawei-Watch-3-1627037636-1639548930.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=5yobY_hFy_EAITAlpRrdTg",
                    detail:"Oppowatch",
                    price: 3000000
                },
                {
                    id_category: 2,
                    name:"Đồng hồ thông minh",
                    img:"https://www.mytrendyphone.eu/images/Waterproof-Smartwatch-with-Heart-Rate-K12-IP68-Bluetooth-4-Black-10092020-01A-p.jpg",
                    detail:"Smartwatch",
                    price: 70000000
                },
                {
                    id_category: 2,
                    name:"Đồng hồ thông minh",
                    img:"https://file.hstatic.net/1000384805/file/apple-watch-series-4_335137c3f9b84fd38591d7dc6842ad21_grande.jpg",
                    detail:"Smartwatch cho iphone",
                    price: 70000000
                },
                {
                    id_category: 3,
                    name:"Điện thoại iphone 13",
                    img:"https://www.techone.vn/wp-content/uploads/2021/09/22-1-500x500.jpg",
                    detail:"Iphone 13 Promax",
                    price: 70000000
                },
                {
                    id_category: 3,
                    name:"Điện thoại iphone 13",
                    img:"https://img.websosanh.vn/v10/users/review/images/ylc9u3alijtph/iphone-13-mini-xanh.jpg?compress=85",
                    detail:"Iphone 13 mini",
                    price: 70000000
                },
                {
                    id_category: 3,
                    name:"Điện thoại iphone XS Max",
                    img:"https://msmobile.com.vn/images/products/2018/10/05/large/apple_iphone_xs_max_gold_1538737587.jpg.jpg",
                    detail:"Iphone XS Max",
                    price: 70000000
                },
                {
                    id_category: 3,
                    name:"Điện thoại iphone 7 plus",
                    img:"https://cdn1.hoanghamobile.com/tin-tuc/wp-content/uploads/2017/03/201611170108370539_tC3ADnh20nC483ng20iPhone207201.jpg",
                    detail:"Iphone 7 plus",
                    price: 70000000
                },
                {
                    id_category: 4,
                    name:"Lenovo",
                    img:"https://5.imimg.com/data5/RU/OT/MY-70603318/lenova-laptop-500x500.jpg",
                    detail:"Lenovo Grey",
                    price: 210000000
                },
                {
                    id_category: 4,
                    name:"Laptop Dell",
                    img:"https://laptop88.vn/media/product/6731_3.jpg",
                    detail:"Dell Inspiron 14 5415 Sang trọng, mỏng nhẹ ",
                    price: 170000000
                },
                {
                    id_category: 4,
                    name:"Macbook",
                    img:"https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/143178/Originals/MacBook-Pro-2020-cover.jpg",
                    detail:"Macbook pro 2022",
                    price: 7000000000
                },
                {
                    id_category: 4,
                    name:"Macboook Air 12",
                    img:"https://image.thanhnien.vn/w1024/Uploaded/2022/aybunux/2022_03_24/3191-7948.jpg",
                    detail:"Macboook Air 12",
                    price: 8900000000
                }
            ];
            return products;
            case "categories":
                const categories =[
                    {
                       id: 1,
                       name: "Máy ảnh"
                    },
                    {
                        id: 2,
                        name: "Đồng hồ thông minh"
                    },
                    {
                        id: 3,
                        name: "Điện thoại"
                    }
                    ,
                    {
                        id: 4,
                        name: "Laptop"
                    }
                ];
                return categories;
    }
    
}

export default data;