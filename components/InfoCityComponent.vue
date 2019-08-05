<template>
    <div class="infoCity">
        <!--Viewed cities-->
        <div class="nav">
            <div class="previous_city">
                <div class="viewed">
                    <h5 v-if="!viewedCity">No cities viewed</h5>
                    <span v-if="viewedCity">Previously viewed:</span>
                    <a class="viewed_cities" v-if="viewedCity" v-for="(city, index) in previouslyViewed" :key="index" @click="popularCities(city, viewedCity)">{{city}}</a>
                </div>
            </div>
            <div class="search_city">
                <label :class="{top_text: clickInput}" for="find_city">Find your city</label>
                <input id="find_city" v-model="searchedCity" @keyup.enter="search(searchedCity)" @focus="clickInput = true" type="text">
                <svg @click="search(searchedCity)" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.3614 18.2168L14.6013 13.2662C15.8252 11.8113 16.4958 9.98069 16.4958 8.07499C16.4958 3.62251 12.8733 0 8.42082 0C3.96834 0 0.345825 3.62251 0.345825 8.07499C0.345825 12.5275 3.96834 16.15 8.42082 16.15C10.0923 16.15 11.6852 15.6458 13.0471 14.6888L17.8433 19.677C18.0438 19.8852 18.3134 20 18.6023 20C18.8758 20 19.1353 19.8957 19.3322 19.7061C19.7507 19.3034 19.7641 18.6357 19.3614 18.2168ZM8.42082 2.10652C11.7119 2.10652 14.3893 4.78391 14.3893 8.07499C14.3893 11.3661 11.7119 14.0435 8.42082 14.0435C5.12973 14.0435 2.45235 11.3661 2.45235 8.07499C2.45235 4.78391 5.12973 2.10652 8.42082 2.10652Z" fill="#3DA9F8"/>
                </svg>
            </div>
        </div>
        <!--Viewed cities-->
        <!--Most popular cities-->
        <section class="mostPopular_cities">
            <h2>Most popular Cities</h2>
            <div class="cities" @click="popularCities('Barcelona')">
                <svg class="img_city" width="117" height="108" viewBox="0 0 117 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.689 79.4263L17.0597 63.9021L22.4263 79.4142" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1 102.29V79.4263L6.34649 63.9021L11.7253 79.378" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.4263 79.3537L27.7929 63.8295L33.1596 79.3457" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M33.1595 79.4262L37.6224 66.5148" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M28.4385 102.29V93.9922L32.8771 86.8139L37.3157 93.9882V102.29" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M19.9651 102.29V93.9922L24.2019 86.8139L28.4388 93.9882V102.29" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11.0876 102.29V93.9922L15.5262 86.8139L19.9648 93.9882V102.29" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.5262 96.6534H32.8771" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M27.7931 60.6813C28.2388 60.6813 28.6001 60.3208 28.6001 59.8761C28.6001 59.4314 28.2388 59.0709 27.7931 59.0709C27.3474 59.0709 26.9861 59.4314 26.9861 59.8761C26.9861 60.3208 27.3474 60.6813 27.7931 60.6813Z" fill="#98CDF9"/>
                    <path d="M17.0556 60.6813C17.5013 60.6813 17.8626 60.3208 17.8626 59.8761C17.8626 59.4314 17.5013 59.0709 17.0556 59.0709C16.6098 59.0709 16.2485 59.4314 16.2485 59.8761C16.2485 60.3208 16.6098 60.6813 17.0556 60.6813Z" fill="#98CDF9"/>
                    <path d="M6.32215 60.6813C6.76786 60.6813 7.12917 60.3208 7.12917 59.8761C7.12917 59.4314 6.76786 59.0709 6.32215 59.0709C5.87645 59.0709 5.51514 59.4314 5.51514 59.8761C5.51514 60.3208 5.87645 60.6813 6.32215 60.6813Z" fill="#98CDF9"/>
                    <path d="M106.949 90.997L111.376 78.4198L115.802 91.0292V102.29" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M98.0963 91.0372L102.519 78.4399L106.941 91.0292" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M89.1708 91.0372L93.6336 78.4399L98.0359 91.1218" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M111.36 75.4445C111.805 75.4445 112.167 75.084 112.167 74.6393C112.167 74.1946 111.805 73.8341 111.36 73.8341C110.914 73.8341 110.553 74.1946 110.553 74.6393C110.553 75.084 110.914 75.4445 111.36 75.4445Z" fill="#98CDF9"/>
                    <path d="M102.591 75.4445C103.037 75.4445 103.398 75.084 103.398 74.6393C103.398 74.1946 103.037 73.8341 102.591 73.8341C102.146 73.8341 101.784 74.1946 101.784 74.6393C101.784 75.084 102.146 75.4445 102.591 75.4445Z" fill="#98CDF9"/>
                    <path d="M93.6818 75.4445C94.1275 75.4445 94.4888 75.084 94.4888 74.6393C94.4888 74.1946 94.1275 73.8341 93.6818 73.8341C93.2361 73.8341 92.8748 74.1946 92.8748 74.6393C92.8748 75.084 93.2361 75.4445 93.6818 75.4445Z" fill="#98CDF9"/>
                    <path d="M1 106.316H116" stroke="#0391FA" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M42.7027 28.2116C44.2002 28.2116 45.4142 27.0003 45.4142 25.5061C45.4142 24.0119 44.2002 22.8006 42.7027 22.8006C41.2051 22.8006 39.9911 24.0119 39.9911 25.5061C39.9911 27.0003 41.2051 28.2116 42.7027 28.2116Z" stroke="#0391FA" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M63.1404 44.7183V48.7443" stroke="#0391FA" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M42.6624 28.2116V32.6402" stroke="#0391FA" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M83.6306 28.2116C85.1282 28.2116 86.3422 27.0003 86.3422 25.5061C86.3422 24.0119 85.1282 22.8006 83.6306 22.8006C82.1331 22.8006 80.9191 24.0119 80.9191 25.5061C80.9191 27.0003 82.1331 28.2116 83.6306 28.2116Z" stroke="#0391FA" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M83.5862 28.2116V32.6402" stroke="#0391FA" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M53.6581 6.41093C55.1557 6.41093 56.3697 5.19965 56.3697 3.70546C56.3697 2.21128 55.1557 1 53.6581 1C52.1605 1 50.9465 2.21128 50.9465 3.70546C50.9465 5.19965 52.1605 6.41093 53.6581 6.41093Z" stroke="#0391FA" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M53.6537 6.41086V10.8394" stroke="#0391FA" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M72.7477 6.41093C74.2453 6.41093 75.4593 5.19965 75.4593 3.70546C75.4593 2.21128 74.2453 1 72.7477 1C71.2501 1 70.0361 2.21128 70.0361 3.70546C70.0361 5.19965 71.2501 6.41093 72.7477 6.41093Z" stroke="#0391FA" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M72.744 6.41086V10.6744" stroke="#0391FA" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M37.3156 105.913V79.6316C37.2903 69.7168 37.8508 59.8091 38.9942 49.9601L41.2539 34.1501C41.3628 33.216 41.8955 32.7249 42.6581 32.7249C43.4651 32.7249 43.9614 33.216 44.0704 34.1501L46.4511 49.9601C47.3509 57.5491 47.7786 65.2588 48.0086 72.9082" stroke="#0391FA" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M48.0089 72.9001L48.2107 57.7705C48.2056 47.8545 48.7863 37.9468 49.9498 28.0989L52.2377 12.2889C52.3466 11.3548 52.8954 10.8637 53.658 10.8637C54.465 10.8637 54.9694 11.3548 55.0784 12.2889L57.3622 28.0989C58.5271 37.9467 59.1092 47.8544 59.1054 57.7705V64.9488" stroke="#0391FA" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M63.1403 44.541C64.6379 44.541 65.8519 43.3297 65.8519 41.8355C65.8519 40.3413 64.6379 39.1301 63.1403 39.1301C61.6427 39.1301 60.4287 40.3413 60.4287 41.8355C60.4287 43.3297 61.6427 44.541 63.1403 44.541Z" stroke="#0391FA" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M89.0819 106.006V79.7201C89.0951 69.8045 88.5225 59.8968 87.367 50.0485L85.0952 34.2385C84.9863 33.3045 84.4456 32.8133 83.6829 32.8133C82.8759 32.8133 82.3756 33.3045 82.2666 34.2385L79.9707 50.0485C79.0345 57.9354 78.3566 65.2708 78.175 73.206" stroke="#0391FA" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M78.1954 73.206V57.7301C78.2059 47.8144 77.6306 37.9067 76.4724 28.0586L74.1886 12.2485C74.0796 11.3145 73.5349 10.8233 72.7722 10.8233C71.9652 10.8233 71.4649 11.3145 71.3519 12.2485L69.0519 28.0586C67.883 37.9061 67.2969 47.8138 67.2966 57.7301V65.2104" stroke="#0391FA" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M72.8246 106.316H53.4562V88.1828L63.1404 48.3457L72.8246 88.1788V106.316Z" stroke="#0391FA" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M53.4563 106.316H42.5615V88.0337L48.0089 72.5015L53.4563 88.0257V106.316Z" stroke="#0391FA" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M55.4738 51.965V59.6144" stroke="#0391FA" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M51.8422 53.9779V62.0299" stroke="#0391FA" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M44.5787 59.6144V67.6664" stroke="#0391FA" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M40.9473 62.03V70.082" stroke="#0391FA" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M70.9321 51.965V59.6144" stroke="#0391FA" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M74.5636 53.9779V62.0299" stroke="#0391FA" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M82.1055 59.6144V67.6664" stroke="#0391FA" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M85.7369 62.03V70.082" stroke="#0391FA" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M38.1227 42.3027H45.2971" stroke="#0391FA" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M51.0349 20.5623H56.2805" stroke="#0391FA" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M70.1453 20.5623H75.3909" stroke="#0391FA" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M81.4757 42.3027H88.1578" stroke="#0391FA" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M49.6227 97.5954C49.6227 96.706 48.9001 95.985 48.0087 95.985C47.1173 95.985 46.3947 96.706 46.3947 97.5954V106.316H49.6227V97.5954Z" stroke="#0391FA" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M83.7194 106.296H72.8247V88.0096L78.2721 72.4774L83.7194 88.0016V106.296Z" stroke="#0391FA" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M79.8859 97.5713C79.8859 96.6819 79.1633 95.9609 78.2719 95.9609C77.3805 95.9609 76.6578 96.6819 76.6578 97.5713V106.292H79.8859V97.5713Z" stroke="#0391FA" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M66.9736 82.8886C66.9736 80.7763 65.2573 79.0639 63.1402 79.0639C61.0231 79.0639 59.3069 80.7763 59.3069 82.8886V106.316H66.9736V82.8886Z" stroke="#0391FA" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h4>Barcelona, SP</h4>
            </div>
            <div class="cities" @click="popularCities('New York')">
                <svg width="117" height="113" viewBox="0 0 117 113" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M48.8648 83.2144C37.6623 82.474 28.1561 77.8731 23.3693 71.4311" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M80.6526 71.4349C77.6971 75.3944 72.9778 78.653 67.1819 80.7555" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M80.6885 71.4349C85.9242 78.4788 96.8009 83.3133 109.37 83.3133C111.588 83.311 113.803 83.1575 116 82.854" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M45.6709 82.961V92.8596" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M42.4927 82.565V106.322" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M39.3148 81.7731V107.906" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M36.1368 80.5853V106.322" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M32.9587 79.3975V107.51" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M29.7808 77.4178V106.322" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M26.6028 75.042V107.51" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M23.4248 71.8745V106.718" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M102.875 82.961V107.906" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M99.6969 82.565V106.322" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M96.5189 81.7731V107.906" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M93.3408 80.5853V106.322" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M90.1628 79.1242V107.51" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M86.9849 77.4178V106.322" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M83.8069 75.042V107.51" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M80.6289 71.4785V106.322" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M23.3654 71.4785C19.1068 77.5325 10.9275 81.9474 1.19482 83.0441" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M80.6884 68.3268C81.1272 68.3268 81.4829 67.9723 81.4829 67.5349C81.4829 67.0976 81.1272 66.743 80.6884 66.743C80.2496 66.743 79.8939 67.0976 79.8939 67.5349C79.8939 67.9723 80.2496 68.3268 80.6884 68.3268Z" fill="#98CDF9"/>
                    <path d="M23.3255 68.2951C23.7643 68.2951 24.12 67.9405 24.12 67.5032C24.12 67.0658 23.7643 66.7113 23.3255 66.7113C22.8867 66.7113 22.531 67.0658 22.531 67.5032C22.531 67.9405 22.8867 68.2951 23.3255 68.2951Z" fill="#98CDF9"/>
                    <path d="M4.18982 106.227C4.84417 107.357 6.05905 108.047 7.36782 108.032C8.67743 108.046 9.8925 107.354 10.5458 106.223" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.5698 106.227C11.2384 107.349 12.4506 108.036 13.7597 108.036C15.0688 108.036 16.2811 107.349 16.9497 106.227" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.9456 106.227C17.6142 107.349 18.8264 108.036 20.1355 108.036C21.4446 108.036 22.6568 107.349 23.3254 106.227" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M23.3254 106.227C23.994 107.349 25.2063 108.036 26.5154 108.036C27.8245 108.036 29.0367 107.349 29.7053 106.227" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M29.7053 106.227C30.3739 107.349 31.5861 108.036 32.8952 108.036C34.2043 108.036 35.4166 107.349 36.0852 106.227" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M36.0812 106.227C36.7498 107.349 37.962 108.036 39.2711 108.036C40.5802 108.036 41.7924 107.349 42.461 106.227" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M42.4611 106.227C43.1297 107.349 44.3419 108.036 45.651 108.036C46.9601 108.036 48.1723 107.349 48.8409 106.227" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M48.8408 106.227C49.5094 107.349 50.7216 108.036 52.0307 108.036C53.3398 108.036 54.5521 107.349 55.2207 106.227" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1 108.032C2.30609 108.048 3.52 107.363 4.178 106.239" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M55.2207 106.227C55.8893 107.349 57.1015 108.036 58.4106 108.036C59.7197 108.036 60.9319 107.349 61.6005 106.227" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M61.5966 106.227C62.2652 107.349 63.4774 108.036 64.7865 108.036C66.0956 108.036 67.3078 107.349 67.9764 106.227" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M67.9764 106.227C68.645 107.349 69.8573 108.036 71.1664 108.036C72.4755 108.036 73.6877 107.349 74.3563 106.227" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M74.3008 106.227C74.9694 107.349 76.1816 108.036 77.4907 108.036C78.7998 108.036 80.012 107.349 80.6806 106.227" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M80.6765 106.227C81.3451 107.349 82.5573 108.036 83.8664 108.036C85.1755 108.036 86.3878 107.349 87.0564 106.227" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M87.0564 106.227C87.725 107.349 88.9372 108.036 90.2463 108.036C91.5554 108.036 92.7676 107.349 93.4362 106.227" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M93.4402 106.227C94.1088 107.349 95.321 108.036 96.6301 108.036C97.9392 108.036 99.1514 107.349 99.82 106.227" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M99.8359 106.227C100.505 107.349 101.717 108.036 103.026 108.036C104.335 108.036 105.547 107.349 106.216 106.227" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M106.216 106.227C106.884 107.349 108.097 108.036 109.406 108.036C110.715 108.036 111.927 107.349 112.596 106.227" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M115.782 108.024C114.476 108.041 113.262 107.355 112.604 106.231" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M71.2935 53.9855L70.1494 51.9306L72.6998 48.1017L75.2263 47.9156C75.3693 50.8615 73.5459 53.9855 71.2935 53.9855Z" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M61.7157 26.487L63.6623 24.5073C63.6623 24.5073 62.693 19.7559 57.9855 19.7559C53.2781 19.7559 52.3088 24.5073 52.3088 24.5073L54.16 26.487" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M52.3844 24.4756L50.6326 24.0361" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M54.3905 20.932L51.4429 18.7265" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M63.7935 24.4756L67.2932 23.5927" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M61.7832 20.932L64.7308 18.7265" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M57.9856 15.254V19.6094" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M61.7754 25.8931C61.8392 24.5081 61.1341 23.2002 59.9402 22.4887C58.7463 21.7772 57.2567 21.7772 56.0628 22.4887C54.8689 23.2002 54.1638 24.5081 54.2276 25.8931V34.6554H61.7754V25.9446C61.7754 25.9446 61.7754 25.909 61.7754 25.8931Z" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M54.2275 28.0392C55.0737 29.6705 56.5673 31.8403 58.0213 32.1096C59.6103 31.7136 61.1397 29.5042 61.7753 28.0194" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M45.6709 92.8596H70.6977V96.0272H45.6709V92.8596Z" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M67.1224 76.2299V92.8596" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M48.8489 80.3002V92.8597" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M70.6975 100.553V107.906" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M45.6709 96.0272L45.6868 92.8596H70.7017V96.0272" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M45.651 108.032L45.6669 100.493" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M73.7086 96.0272H42.4927V100.383H73.7086V96.0272Z" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M55.2048 100.779V106.718" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M61.5608 100.779V106.718" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M67.1264 75.9645L57.6678 79.2984L61.7635 34.6673L67.1264 37.922V75.9645Z" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M76.0287 43.192L76.6563 45.8884L75.1468 48.1414L72.6123 48.2325" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M67.1262 56.0366V59.9644L67.1659 60.0435L71.2894 53.9856L70.1374 51.9306L67.1262 56.0366Z" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M61.0324 42.7169C56.623 50.6358 52.0824 57.5688 47.3114 62.8785L48.8607 80.4902C52.5233 75.6557 56.0986 67.1586 59.6262 58.04L61.0324 42.7169Z" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M61.3979 38.7574C56.6984 46.1023 51.9394 51.891 48.094 57.1254L48.3165 61.5679C52.7259 56.4206 56.9487 49.8717 61.0523 42.5031L61.3979 38.7574Z" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M52.8015 34.6554C52.3122 38.3483 51.4197 41.9769 50.1399 45.4766C48.2093 50.03 46.088 43.3227 45.0511 33.8952C48.8091 32.0382 51.1609 28.5855 51.3317 27.3502L52.8015 34.6554Z" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M58.0849 22.2624C57.8188 24.5826 56.4959 25.8496 54.4421 26.3089" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M58.085 22.2624C58.3511 24.5826 59.6104 25.8496 61.6602 26.3089" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M49.6592 9.31494H43.3032H49.6592Z" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M50.8589 6.14731H42.1194H50.8589Z" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M44.6737 9.31494H48.4674L48.3045 13.2744L46.1673 15.4323C44.2565 14.3157 43.8235 12.0866 44.6737 9.31494Z" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M48.3046 13.2624L46.1674 15.4322L47.3591 32.4381C49.3454 30.787 50.3147 30.0624 51.3316 27.3383L48.3046 13.2624Z" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.18982 110.19C4.84417 111.32 6.05905 112.01 7.36782 111.996C8.67743 112.009 9.8925 111.318 10.5458 110.186" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.5698 110.19C11.2384 111.312 12.4506 112 13.7597 112C15.0688 112 16.2811 111.312 16.9497 110.19" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.9456 110.19C17.6142 111.312 18.8264 112 20.1355 112C21.4446 112 22.6568 111.312 23.3254 110.19" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M23.3254 110.19C23.994 111.312 25.2063 112 26.5154 112C27.8245 112 29.0367 111.312 29.7053 110.19" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M29.7053 110.19C30.3739 111.312 31.5861 112 32.8952 112C34.2043 112 35.4166 111.312 36.0852 110.19" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M36.0812 110.19C36.7498 111.312 37.962 112 39.2711 112C40.5802 112 41.7924 111.312 42.461 110.19" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M42.4611 110.19C43.1297 111.312 44.3419 112 45.651 112C46.9601 112 48.1723 111.312 48.8409 110.19" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M48.8408 110.19C49.5094 111.312 50.7216 112 52.0307 112C53.3398 112 54.5521 111.312 55.2207 110.19" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1 112C2.30609 112.016 3.52 111.331 4.178 110.206" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M55.2207 110.19C55.8893 111.312 57.1015 112 58.4106 112C59.7197 112 60.9319 111.312 61.6005 110.19" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M61.5966 110.19C62.2652 111.312 63.4774 112 64.7865 112C66.0956 112 67.3078 111.312 67.9764 110.19" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M67.9764 110.19C68.645 111.312 69.8573 112 71.1664 112C72.4755 112 73.6877 111.312 74.3563 110.19" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M74.3008 110.19C74.9694 111.312 76.1816 112 77.4907 112C78.7998 112 80.012 111.312 80.6806 110.19" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M80.6765 110.19C81.3451 111.312 82.5573 112 83.8664 112C85.1755 112 86.3878 111.312 87.0564 110.19" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M87.0564 110.19C87.725 111.312 88.9372 112 90.2463 112C91.5554 112 92.7676 111.312 93.4362 110.19" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M93.4402 110.19C94.1088 111.312 95.321 112 96.6301 112C97.9392 112 99.1514 111.312 99.82 110.19" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M99.8359 110.19C100.505 111.312 101.717 112 103.026 112C104.335 112 105.547 111.312 106.216 110.19" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M106.216 110.19C106.884 111.312 108.097 112 109.406 112C110.715 112 111.927 111.312 112.596 110.19" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M115.782 111.992C114.476 112.008 113.262 111.323 112.604 110.198" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M46.4892 6.0998C47.9021 6.0998 49.0475 4.95817 49.0475 3.5499C49.0475 2.14163 47.9021 1 46.4892 1C45.0763 1 43.9309 2.14163 43.9309 3.5499C43.9309 4.95817 45.0763 6.0998 46.4892 6.0998Z" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M49.0157 90.0127L59.519 85.3287L59.4435 78.6689L67.1184 75.9646V37.922L61.7675 34.6554H52.8015C52.3124 38.3484 51.4199 41.977 50.1399 45.4767C49.7188 46.4665 49.2541 46.9258 48.8568 46.9377V56.0445" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M67.1262 56.4524L76.0207 43.101L70.5068 39.8345L67.1262 44.4987V56.4524Z" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h4>New York, USA</h4>
            </div>
            <div class="cities" @click="popularCities('Paris')" :class="{active_popular_city: isActive}">
                <svg width="132" height="126" viewBox="0 0 132 126" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M74.9419 124.422H129.817" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1 124.422H56.3401" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path opacity="0.5" d="M130.375 120.423C129.491 119.028 127.957 118.191 126.283 118.144V118.098C126.283 115.168 121.493 112.75 115.587 112.75C114.889 112.75 114.145 112.796 113.447 112.843C113.354 107.169 108.053 102.565 101.449 102.565C98.6126 102.565 95.8688 103.495 93.5901 105.17" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path opacity="0.5" d="M51.9222 87.8235C40.5752 86.847 26.6239 94.2411 21.2294 103.775C13.1376 101.775 8.39421 108.937 8.85925 113.122C3.65077 113.215 1.37206 116.796 1.23254 120.377" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M75.3138 77.2671C76.9415 83.4522 79.0807 89.4977 81.6849 95.3108" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M66.5245 13.1842C68.2452 39.5986 70.7099 58.5724 74.3373 73.4538" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M47.3184 99.1706C42.8074 108.146 37.2734 115.959 30.7628 124.422H45.8767" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M55.5496 77.2671C53.8754 83.4057 51.7827 89.4512 49.1785 95.2643" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M64.4319 13.1842C62.7112 39.6451 60.2 58.6189 56.4796 73.5468" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M45.8302 124.422C45.8302 113.726 54.852 105.03 65.548 105.03C76.244 105.03 85.1728 113.726 85.1728 124.422" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path opacity="0.5" d="M116.424 120.423C115.168 118.284 112.657 117.261 110.285 117.912C110.192 113.959 106.286 110.75 101.496 110.75C100.705 110.75 99.9147 110.843 99.1706 111.029C98.1475 107.355 94.5202 104.612 90.2418 104.612C89.1722 104.565 88.0561 104.751 87.033 105.077" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M99.6356 123.446L98.6125 124.422" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M97.3104 120.47L93.3575 124.422" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M94.7992 117.726L88.2886 124.236" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M92.8461 114.424L85.0798 122.19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M90.6603 111.308L84.0566 117.958" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M88.6141 108.146L82.3361 114.424" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M86.6145 104.844L80.0574 111.401" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M84.7543 101.449L77.3136 108.89" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M81.871 99.1241L74.0582 106.89" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M76.5694 99.1241L70.1053 105.588" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M71.3145 99.1241L65.3619 105.077" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M79.7318 90.6603L75.0349 95.4038" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M46.8533 118.33L40.7612 124.422" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M65.9665 99.2171L58.9908 106.193" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M78.3366 86.847L71.5935 93.5901" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M60.7581 99.1706L35.5062 124.422" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M76.9881 82.9406L71.0355 88.8931" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M55.3635 99.2636L32.4834 122.19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M75.7789 78.8947L70.4309 84.1962" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M50.2015 99.1706L43.7839 105.635" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M59.6419 89.7767L54.1544 95.2177" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M72.1516 77.2671L69.8729 79.4993" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M60.3395 83.7776L49.3645 94.7527" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M73.6397 70.4774L70.6169 73.5467" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M61.5951 77.2671L52.9453 85.9169" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M72.7096 66.199L65.455 73.4537" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M56.3401 77.2671L55.224 78.3832" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M71.826 61.7812L60.0604 73.5468" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M71.1285 57.2237L57.0377 71.3145" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M70.338 52.7593L58.4794 64.6179" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M69.7334 48.0624L59.642 58.1538" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M69.1753 43.3654L60.6185 51.9222" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M68.6637 38.622L61.4556 45.8767" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M68.1988 33.8786L62.1532 39.8776" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M67.7337 29.0421L62.7577 34.018" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M67.3152 24.2057L63.4553 28.0655" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M66.9431 19.3228L63.8738 22.392" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M66.6176 14.3932L64.2924 16.672" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M71.826 95.4038H58.9443L61.13 77.2671H69.5938L71.826 95.4038Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M86.1029 99.1241H44.7141" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M47.0393 95.4037H81.685H83.7777" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M77.2671 77.2671H53.5499" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M54.48 73.5467H76.337" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M67.9662 13.0911H63.3158V8.53368C63.2693 7.46408 64.1064 6.5805 65.176 6.534H65.2225H65.1295H65.6875C66.8036 6.534 67.9662 7.41758 67.9662 8.53368V13.0911Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M65.641 1V6.11547" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path opacity="0.5" d="M17.0628 86.6532C17.2044 86.1594 16.9189 85.6444 16.4251 85.5028C15.9313 85.3612 15.4162 85.6468 15.2746 86.1405C15.1331 86.6343 15.4186 87.1494 15.9124 87.291C16.4062 87.4325 16.9213 87.147 17.0628 86.6532Z" fill="white"/>
                    <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M36.4014 40.3531L43.167 31.3025L52.2176 38.0682L45.452 47.1188L36.4014 40.3531Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M21.8793 64.6831L30.2728 63.5964L31.3596 71.9899L22.966 73.0766L21.8793 64.6831Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path opacity="0.5" d="M34.6692 81.778C35.9248 80.5224 37.1339 79.1737 38.25 77.7321C46.4348 67.2221 47.0858 55.7821 45.5047 47.1323" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path opacity="0.5" d="M14.9979 91.4044C14.6723 92.8925 14.4398 94.4271 14.2538 95.9618" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path opacity="0.5" d="M22.9966 72.9422C20.1598 76.8951 19.1832 78.3832 17.7416 82.1035" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M83.5917 99.1706C88.1026 108.146 93.5436 115.959 100.519 124.422H85.3123" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h4>Paris, FR</h4>
            </div>
            <div class="cities" @click="popularCities('London')">
                <svg width="117" height="119" viewBox="0 0 117 119" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.13606 71.2266C6.63284 71.2266 7.03556 70.8272 7.03556 70.3345C7.03556 69.8418 6.63284 69.4424 6.13606 69.4424C5.63929 69.4424 5.23657 69.8418 5.23657 70.3345C5.23657 70.8272 5.63929 71.2266 6.13606 71.2266Z" fill="#98CDF9"/>
                    <path d="M17.083 44.401C17.5797 44.401 17.9825 44.0016 17.9825 43.5089C17.9825 43.0162 17.5797 42.6168 17.083 42.6168C16.5862 42.6168 16.1835 43.0162 16.1835 43.5089C16.1835 44.0016 16.5862 44.401 17.083 44.401Z" fill="#98CDF9"/>
                    <path d="M8.87959 57.0555C9.37637 57.0555 9.77909 56.6561 9.77909 56.1634C9.77909 55.6707 9.37637 55.2713 8.87959 55.2713C8.38282 55.2713 7.9801 55.6707 7.9801 56.1634C7.9801 56.6561 8.38282 57.0555 8.87959 57.0555Z" fill="#98CDF9"/>
                    <path d="M29.4914 35.529C29.9882 35.529 30.3909 35.1296 30.3909 34.6369C30.3909 34.1442 29.9882 33.7448 29.4914 33.7448C28.9946 33.7448 28.5919 34.1442 28.5919 34.6369C28.5919 35.1296 28.9946 35.529 29.4914 35.529Z" fill="#98CDF9"/>
                    <path d="M62.957 35.7921C63.4538 35.7921 63.8565 35.3927 63.8565 34.9C63.8565 34.4073 63.4538 34.0079 62.957 34.0079C62.4602 34.0079 62.0575 34.4073 62.0575 34.9C62.0575 35.3927 62.4602 35.7921 62.957 35.7921Z" fill="#98CDF9"/>
                    <path d="M46.1409 32.139C46.6377 32.139 47.0404 31.7396 47.0404 31.2469C47.0404 30.7542 46.6377 30.3548 46.1409 30.3548C45.6442 30.3548 45.2415 30.7542 45.2415 31.2469C45.2415 31.7396 45.6442 32.139 46.1409 32.139Z" fill="#98CDF9"/>
                    <path d="M16.9705 98.4224C17.4673 98.4224 17.87 98.023 17.87 97.5303C17.87 97.0376 17.4673 96.6382 16.9705 96.6382C16.4738 96.6382 16.071 97.0376 16.071 97.5303C16.071 98.023 16.4738 98.4224 16.9705 98.4224Z" fill="#98CDF9"/>
                    <path d="M8.67268 85.9731C9.16946 85.9731 9.57218 85.5736 9.57218 85.0809C9.57218 84.5883 9.16946 84.1888 8.67268 84.1888C8.17591 84.1888 7.77319 84.5883 7.77319 85.0809C7.77319 85.5736 8.17591 85.9731 8.67268 85.9731Z" fill="#98CDF9"/>
                    <path d="M29.2755 107.013C29.7722 107.013 30.175 106.614 30.175 106.121C30.175 105.629 29.7722 105.229 29.2755 105.229C28.7787 105.229 28.376 105.629 28.376 106.121C28.376 106.614 28.7787 107.013 29.2755 107.013Z" fill="#98CDF9"/>
                    <path d="M62.3858 107.013C62.8826 107.013 63.2853 106.614 63.2853 106.121C63.2853 105.629 62.8826 105.229 62.3858 105.229C61.889 105.229 61.4863 105.629 61.4863 106.121C61.4863 106.614 61.889 107.013 62.3858 107.013Z" fill="#98CDF9"/>
                    <path d="M69.5233 91.861C60.6977 101.312 46.972 104.506 34.8292 99.9332C22.6865 95.3607 14.5567 83.937 14.2797 71.0581C14.0028 58.1791 21.6342 46.4221 33.5693 41.3403C45.5044 36.2584 59.355 38.8687 68.5788 47.9382M68.5428 42.3848C53.666 30.6768 32.1811 32.4283 19.4316 46.3886C6.68217 60.3488 7.04422 81.7262 20.2592 95.2539C33.4742 108.782 55.0063 109.817 69.4783 97.6196L68.5428 42.3848Z" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M51.5829 105.849L51.6099 113.419" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M40.7216 105.849V111.621" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M68.5248 48.8035L44.2206 38.8298" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M68.5384 52.6707L37.317 39.8601" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M68.5563 56.5381L32.3383 41.6756" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M69.4063 60.7488L28.3311 43.8969" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M69.3568 64.5893L25.0793 46.4216" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M69.3569 68.4521L22.192 49.0979" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M69.4108 72.3372L19.8353 51.9928" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M45.3135 66.3111L17.8925 55.0572" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M69.4062 76.1956L49.7614 68.1354" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M41.8009 68.7287L16.3273 58.2776" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M69.4783 80.0852L49.9594 72.0786" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M42.9523 73.0643L15.1445 61.6543" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M69.132 83.8053L46.6357 74.5764" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M69.3478 87.7573L14.3484 65.1915" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M69.015 91.4819L14.0336 68.925" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M66.42 94.2786L14.0336 72.7833" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M63.1054 96.7809L14.9916 77.0386" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M58.9273 98.9309L16.179 81.3876" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M53.9215 100.737L18.1398 86.0533" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M47.3508 101.902L22.201 91.5844" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M68.6238 48.0719C59.4478 38.9689 45.6159 36.3075 33.6734 41.347C21.7309 46.3866 14.0728 58.1163 14.323 70.9859C14.5731 83.8555 22.6812 95.2839 34.8107 99.8632C46.9402 104.443 60.6583 101.254 69.4738 91.8074C69.5251 91.7675 69.5692 91.7192 69.6043 91.6647C69.6043 91.0937 69.5773 89.8091 69.5773 89.8091C69.5773 89.8091 69.5773 77.7657 69.5773 70.3746V56.7521L68.6508 56.7254L68.6238 48.0719Z" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M46.141 74.5274C48.451 74.5274 50.3236 72.6701 50.3236 70.3791C50.3236 68.088 48.451 66.2308 46.141 66.2308C43.831 66.2308 41.9584 68.088 41.9584 70.3791C41.9584 72.6701 43.831 74.5274 46.141 74.5274Z" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M69.5009 111.496L69.5818 56.7566H91.0257V111.621" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M68.6553 38.0268H91.8487V53.1926H68.6553V38.0268Z" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M88.7769 34.0079H71.6865V38.0224H88.7769V34.0079Z" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M91.8532 56.7566H68.6553V53.1882H91.8487L91.8532 56.7566Z" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M85.3544 17.95H75.0103V24.1948H85.3544V17.95Z" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M88.7769 34.0079H71.6865L75.0416 24.1948H85.3633L88.7769 34.0079Z" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M80.1643 5.67014L75.0103 17.9455L85.3544 17.95L80.1643 5.67014Z" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M80.1643 1V5.90658" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M76.6338 60.325V66.5698" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M83.8297 60.325V66.5698" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M76.6338 75.9369V82.1817" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M83.8297 75.9369V82.1817" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M76.6338 91.1027V97.7935" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M83.8297 91.1027V97.7935" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M68.6553 34.454V38.0224" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M91.8486 34.454V38.0224" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M80.4071 50.6234C83.194 50.6234 85.4533 48.3827 85.4533 45.6187C85.4533 42.8546 83.194 40.614 80.4071 40.614C77.6202 40.614 75.361 42.8546 75.361 45.6187C75.361 48.3827 77.6202 50.6234 80.4071 50.6234Z" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M80.2317 41.1448V46.0514H85.1789" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M69.6133 69.6922H92.8247" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M69.8876 73.2606H92.8246" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M69.5233 84.8579H92.8246" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M69.5233 88.4264H92.8246" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M69.8876 100.47H92.8246" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M69.8876 104.038H92.8246" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.61145 111.496C5.3684 112.76 6.74081 113.535 8.22291 113.535C9.70501 113.535 11.0774 112.76 11.8344 111.496" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11.8298 111.496C12.5868 112.76 13.9592 113.535 15.4413 113.535C16.9234 113.535 18.2958 112.76 19.0528 111.496" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M19.0529 111.496C19.8098 112.76 21.1822 113.535 22.6643 113.535C24.1464 113.535 25.5188 112.76 26.2758 111.496" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M26.2756 111.496C27.0326 112.76 28.405 113.535 29.8871 113.535C31.3692 113.535 32.7416 112.76 33.4986 111.496" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M33.4987 111.496C34.2556 112.76 35.628 113.535 37.1101 113.535C38.5922 113.535 39.9646 112.76 40.7216 111.496" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M40.717 111.496C41.474 112.76 42.8464 113.535 44.3285 113.535C45.8106 113.535 47.183 112.76 47.94 111.496" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1 113.53C2.47869 113.548 3.85301 112.777 4.59797 111.51" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M47.9399 111.496C48.6969 112.76 50.0693 113.535 51.5514 113.535C53.0335 113.535 54.4059 112.76 55.1629 111.496" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M55.163 111.496C55.9199 112.76 57.2923 113.535 58.7744 113.535C60.2565 113.535 61.6289 112.76 62.3859 111.496" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M62.3857 111.496C63.1427 112.76 64.5151 113.535 65.9972 113.535C67.4793 113.535 68.8517 112.76 69.6087 111.496" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M69.5413 111.496C70.2982 112.76 71.6706 113.535 73.1527 113.535C74.6348 113.535 76.0072 112.76 76.7642 111.496" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M76.7642 111.496C77.5211 112.76 78.8935 113.535 80.3756 113.535C81.8577 113.535 83.2301 112.76 83.9871 111.496" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M83.9825 111.496C84.7395 112.76 86.1119 113.535 87.594 113.535C89.0761 113.535 90.4485 112.76 91.2055 111.496" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M91.2325 111.496C91.9895 112.76 93.3619 113.535 94.844 113.535C96.3261 113.535 97.6985 112.76 98.4555 111.496" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M98.4509 111.496C99.2079 112.76 100.58 113.535 102.062 113.535C103.544 113.535 104.917 112.76 105.674 111.496" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M109.285 113.521C107.807 113.539 106.432 112.768 105.687 111.501" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11.3486 115.961C12.1056 117.225 13.478 118 14.9601 118C16.4422 118 17.8146 117.225 18.5715 115.961" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18.5715 115.961C19.3285 117.225 20.7009 118 22.183 118C23.6651 118 25.0375 117.225 25.7945 115.961" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M25.7944 115.961C26.5514 117.225 27.9238 118 29.4059 118C30.888 118 32.2604 117.225 33.0174 115.961" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M33.0173 115.961C33.7743 117.225 35.1467 118 36.6288 118C38.1109 118 39.4833 117.225 40.2403 115.961" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M40.2358 115.961C40.9928 117.225 42.3652 118 43.8473 118C45.3294 118 46.7018 117.225 47.4588 115.961" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M47.4587 115.961C48.2157 117.225 49.5881 118 51.0702 118C52.5523 118 53.9247 117.225 54.6817 115.961" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M54.6816 115.961C55.4386 117.225 56.811 118 58.2931 118C59.7752 118 61.1476 117.225 61.9046 115.961" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M61.9001 115.961C62.6571 117.225 64.0295 118 65.5116 118C66.9937 118 68.3661 117.225 69.1231 115.961" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.7417 118C9.22039 118.018 10.5947 117.246 11.3397 115.979" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M69.1229 115.961C69.8799 117.225 71.2523 118 72.7344 118C74.2165 118 75.5889 117.225 76.3458 115.961" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M76.3459 115.961C77.1029 117.225 78.4753 118 79.9574 118C81.4395 118 82.8119 117.225 83.5689 115.961" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M83.5688 115.961C84.3258 117.225 85.6982 118 87.1803 118C88.6624 118 90.0348 117.225 90.7918 115.961" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M90.7242 115.961C91.4812 117.225 92.8536 118 94.3357 118C95.8178 118 97.1902 117.225 97.9472 115.961" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M97.9473 115.961C98.7042 117.225 100.077 118 101.559 118C103.041 118 104.413 117.225 105.17 115.961" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M105.17 115.961C105.927 117.225 107.3 118 108.782 118C110.264 118 111.636 117.225 112.393 115.961" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M116 117.991C114.521 118.009 113.147 117.237 112.402 115.97" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h4>London, GB</h4>
            </div>
            <div class="cities" @click="popularCities('Rio de Janeiro')">
                <svg width="117" height="105" viewBox="0 0 117 105" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M66.173 6.84212C66.173 3.60477 63.6696 1 60.5569 1C57.4443 1 54.9409 3.60063 54.9409 6.83386C54.94 6.849 54.94 6.86419 54.9409 6.87934V15.9671H66.1688V6.87107C66.171 6.86155 66.1724 6.85187 66.173 6.84212Z" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M64.5209 6.82973C64.5879 5.38346 63.8474 4.01771 62.5934 3.27473C61.3394 2.53175 59.7748 2.53175 58.5208 3.27473C57.2668 4.01771 56.5263 5.38346 56.5933 6.82973V15.9671H64.5209V6.82973Z" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M56.5933 9.07063C57.482 10.7741 59.0508 13.0398 60.5779 13.321C62.2469 12.9075 63.8533 10.6004 64.5208 9.04996" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M71.2968 48.6425H88.4329" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M97.3827 48.6425H105.31" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M97.3034 48.6301C97.3837 48.3107 97.4271 47.9834 97.4328 47.6543C97.4328 46.1245 96.3605 44.7064 94.7291 43.9001C94.0626 41.3791 91.8702 39.5444 89.2504 39.3154C86.6306 39.0864 84.1479 40.5124 83.0463 42.8789C80.8503 42.9895 79.1311 44.7932 79.1451 46.9721C79.1696 47.535 79.2735 48.0916 79.4539 48.6259" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11.2183 100.916L28.3585 87.1104" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M29.2681 59.3137C34.6044 53.2269 42.8734 50.5204 50.8186 52.2602" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M31.2249 90.0624C24.3029 83.9149 21.9814 74.1437 25.4086 65.5817" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M71.0964 76.7574H50.2344V79.6516H71.0964V76.7574Z" stroke="#1F9DBF" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18.2153 101.04L37.7339 85.072C40.0471 83.1796 43.39 83.1796 45.7032 85.072L47.6517 86.668L48.7824 87.5817" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M116 98.9724L88.8167 76.745C86.1941 74.5972 82.4019 74.5972 79.7793 76.745L77.305 78.7668L72.3816 82.7567" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M84.6526 104L72.2397 93.7091H48.8742L36.5823 103.975" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M72.3482 79.6516H48.9827V93.7091H72.3482V79.6516Z" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M52.3207 79.6516V93.7091" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M55.6586 79.6516V93.7091" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M58.9966 79.6516V93.7091" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M62.3345 79.6516V93.7091" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M65.6724 79.6516V93.7091" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M69.0103 79.6516V93.7091" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M27.2861 15.9795V20.114" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M94.0448 15.9795V20.114" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M71.1549 60.7691L64.5208 56.6263V15.9795H71.1966L71.1549 60.7691Z" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M52.3457 58.6233L52.3707 76.7574H69.0103V67.926L52.3457 58.6233Z" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M67.7585 15.9795V58.5654" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M51.0688 16.0087L64.5207 15.9795H51.0688V16.0087Z" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M64.5749 56.6263L64.5207 15.9671L64.5749 25.6502C60.0729 25.307 56.493 24.4388 53.9895 23.2315V50.0647L51.0688 48.2497V57.8625L70.2619 68.6123V60.1448L64.5749 56.6263Z" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.4338 65.5817C16.3873 65.3818 16.3566 65.1786 16.342 64.974C16.346 63.6186 17.3738 62.481 18.7328 62.3279C18.7168 62.1989 18.7084 62.0691 18.7078 61.9392C18.7078 59.4295 21.3239 57.478 24.5492 57.478C27.1027 57.478 29.2682 58.553 30.0651 60.6203H30.1277C32.7062 60.6203 34.7966 62.2121 34.7966 64.3869C34.8306 64.7947 34.7648 65.2046 34.6047 65.5817" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1 65.5941H18.9414" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M25.6172 65.5941H42.7241" stroke="#98CDF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M92.8567 48.6425C92.8567 48.7066 92.8025 48.7694 92.7222 48.7694C92.6419 48.7694 92.5877 48.7066 92.5877 48.6425C92.5877 48.5784 92.6419 48.5156 92.7222 48.5156C92.8025 48.5156 92.8567 48.5784 92.8567 48.6425Z" fill="#8ADBDB" stroke="#98CDF9" stroke-width="1.4"/>
                    <path d="M47.8196 65.5941C47.8196 65.6582 47.7654 65.721 47.6851 65.721C47.6048 65.721 47.5506 65.6582 47.5506 65.5941C47.5506 65.53 47.6048 65.4672 47.6851 65.4672C47.7654 65.4672 47.8196 65.53 47.8196 65.5941Z" fill="#8AD1DD" stroke="#98CDF9" stroke-width="1.4"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M64.5207 25.6626C53.1843 24.7985 48.4069 20.6102 46.3457 16.0208L64.5166 15.9795V25.6626H64.5207Z" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M50.6516 21.3627V48.0016L54.9895 50.0689V23.2398C53.3628 22.6609 51.7361 22.0821 50.6516 21.3627Z" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M64.5751 26.1877L64.5208 15.9671H71.1967V25.6295C83.2007 24.3643 94.2743 20.9285 103.662 15.9671H17.4143C27.7558 21.3035 39.0403 24.6097 50.6476 25.7039V21.3627C51.482 22.0821 52.7338 22.6568 53.9855 23.2398V25.89" stroke="#308CF9" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h4>Rio De Janeiro, BR</h4>
            </div>
        </section>
        <!--Most popular cities-->
        <!--Table of favourite cities-->
        <section class="favourite_cities">
            <h5 v-if="addMostFavouritesCities.length == 0">No selected cities</h5>
            <h2 v-if="addMostFavouritesCities.length > 0">Favorite Cities</h2>
            <table class="table table-bordered"  v-if="addMostFavouritesCities.length > 0">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Last seen</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="city in addMostFavouritesCities" :key="city.id">
                    <td>{{city.name}}, {{city.country}}</td>
                    <td>{{city.date}}</td>
                    <td class="text-right">
                        <b-button class="btn btn-primary" @click="removeFavoriteCity(city.id, false)">Remove</b-button>
                    </td>
                </tr>
                </tbody>
            </table>
        </section>
        <!--Table of favourite cities-->
        <!--Footer-->
        <Footer/>
        <!--Footer-->
        <!--Modal-->
        <b-modal id="modalRemoveFavoriteCity" v-model="showModalRemoveFavoriteCity" hide-footer>
            <template slot="modal-header">
                <h3 class="modal-title text-center">Are you sure?</h3>
            </template>
            <div class="d-block text-center">
                <p>Are you sure you want to remove city?</p>
            </div>
            <div class="d-block-footer">
                <b-button class="mt-2" @click="removeFavoriteCity(undefined, true)">Yes</b-button>
                <b-button class="mt-3" @click="showModalRemoveFavoriteCity = false">No</b-button>
            </div>
        </b-modal>
        <b-modal id="modalErrorCity" ref="modalErrorCity" v-model="showModalErrorCity" hide-header hide-footer>
            <div class="d-block text-center">
                <p>city not found</p>
            </div>
        </b-modal>
        <!--Modal-->
    </div>
</template>
<script>
import axios from 'axios';
import store from '../store/index.js';
import Footer from "~/components/Footer.vue";
    export default {
        data(){
            return{
                isActive: true,
                clickInput: false,
                viewedCity: false,
                remove_id: Number,
                mostPopularCities: 0,
                favorite: 'Add to favorites',
                searchedCity: '',
                previouslyViewed: [],
                showModalRemoveFavoriteCity: false,
                showModalErrorCity: false
            }
        },
        mounted(){
            this.$store.state.mostPopularCities = JSON.parse(getCookie('favoriteCities'));
            this.checkPreviouslyCities();

        },
        computed: {
            addMostFavouritesCities() {
                return this.$store.getters.addMostFavouritesCities;
            }
        },
        methods: {
            checkPreviouslyCities(){
                if(getCookie('city') != undefined && getCookie('city').split(',').length > 0){
                    this.previouslyViewed = getCookie('city').split(',');
                    this.viewedCity = true;
                }
            },
            previouslyCities(name){
                if(getCookie('city') != undefined && getCookie('city').split(',').length > 0){
                    this.previouslyViewed = getCookie('city').split(',');
                    this.previouslyViewed.push(name);
                    if(getCookie('city').split(',').length <= 5){
                        this.previouslyViewed = [...new Set(this.previouslyViewed)];
                    }else{
                        this.previouslyViewed.splice(0, 1);
                    }
                }else{
                    this.previouslyViewed.push(name);
                    this.viewedCity = true;
                }
                setCookie('city', this.previouslyViewed);
                return this.previouslyViewed;
            },
            popularCities(city, viewedCity){
                if(getCookie('city') == undefined){
                    axios.get('http://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=' + this.$store.state.appid).then(response => {
                        this.previouslyCities(response.data.name);
                        this.$store.commit('changeCities', response.data);
                    }).catch(error => {
                            console.error(error);
                    });
                }else{
                    if(!viewedCity){
                        axios.get('http://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=' + this.$store.state.appid).then(response => {
                            this.previouslyCities(response.data.name);

                            let vm = this;
                            this.addMostFavouritesCities.forEach(val => {
                                if(val.id == response.data.id){
                                    vm.addFavorites = true;
                                    vm.favorite = 'Added to favorites';
                                }
                            });
                            this.$store.commit('changeCities', response.data);
                        }).catch(error => {
                                console.error(error);
                        });
                    }else if(viewedCity){
                        axios.get('http://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=' + this.$store.state.appid).then(response => {
                            let vm = this;

                            this.addMostFavouritesCities.forEach(val => {
                                if(val.id == response.data.id){
                                    vm.addFavorites = true;
                                    vm.favorite = 'Added to favorites';
                                }else{
                                    vm.addFavorites = false;
                                    vm.favorite = 'Add to favorites';
                                }
                            });
                            this.$store.commit('changeCities', response.data);
                        }).catch(error => {
                                console.error(error);
                        });
                    }
                }
            },
            removeFavoriteCity(id, val){
                if(!val)
                    this.remove_id = id;
                    this.showModalRemoveFavoriteCity = true;

                let remove_id = this.remove_id;
                let vm = this;
                let mostPopularCities = this.addMostFavouritesCities;

                if(val){
                    vm.addFavorites = false;
                    vm.favorite = 'Add to favorites';
                    mostPopularCities.forEach((nval, ind) => {
                        if(remove_id == nval.id){
                            mostPopularCities.splice(ind, 1);
                        }
                    });
                    this.showModalRemoveFavoriteCity = false;
                    setCookie('favoriteCities', JSON.stringify(mostPopularCities));
                    this.$store.commit('addMostPopularCities', mostPopularCities);
                }
            },
            search(city){
                this.addFavorites = false;
                this.favorite = 'Add to favorites';
                axios.get('http://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=' + this.$store.state.appid).then(response => {
                    this.$store.commit('changeCities', response.data);
                    if(getCookie('city') != undefined && getCookie('city').indexOf(response.data.name) == -1) this.previouslyCities(response.data.name);
                }).catch(error => {
                    this.showModalErrorCity = true;
                    this.$refs.modalErrorCity.$refs.innerText = JSON.parse(JSON.stringify(error)).response.data.message;
                    setTimeout(() => {
                        this.showModalErrorCity = false;
                    }, 2000);
                });
                this.searchedCity = '';
            }
        },
        components: {
            Footer
        }
    }
</script>

<style>
    .infoCity{
        width: 75%;
        min-height: 100vh;
        background: #FFF;
        position: relative;
    }
    .infoCity .nav{
        height: 70px;
        padding: 15px 25px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        position: relative;
    }
    .infoCity .nav:after{
        content: "";
        border-bottom: 1px solid #C4C4C4;
        opacity: 0.2;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
    }
    .infoCity .nav .previous_city .viewed{
        font-style: normal;
        font-weight: normal;
        line-height: normal;
        font-size: 13px;

        color: #A1A1A1;
    }
    .infoCity .nav .previous_city .viewed h5{
        color: #333;
        position: absolute;
        top: 0;
        bottom: 0;
        display: flex;
        align-items: center;
    }
    .infoCity .nav .previous_city .viewed span{
        display: block;
        margin-bottom: 4px;
    }
    .infoCity .nav .previous_city .viewed .viewed_cities{
        font-style: normal;
        font-weight: normal;
        line-height: normal;
        font-size: 13px;
        text-decoration-line: underline;
        margin-right: 6px;
        cursor: pointer;

        color: #5CBAFF;
    }
    .infoCity .nav .search_city{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 340px;
    }
    .infoCity .nav .search_city label{
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        font-size: 18px;
        position: absolute;
        margin-left: 2px;
        transition: 2s all;
        z-index: 1;

        color: #1D1D1D;
    }
    .infoCity .nav .search_city label.top_text{
        font-size: 12px;
        top: 10px;
    }
    .infoCity .nav .search_city #find_city{
        border: none;
        border-bottom: 2px solid #3DA9F8;
        padding-left: 4px;
        padding-bottom: 0;
        position: relative;
        top: 10px;
    }
    .infoCity .nav .search_city #find_city:focus{
        outline: none;
    }
    .infoCity .nav .search_city svg{
        transform: scale(2);
        display: flex;
        align-self: flex-end;
        width: 10px;
        position: relative;
        bottom: 14px;
        right: 10px;
        cursor: pointer;
    }
    .mostPopular_cities{
        padding: 40px 25px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .mostPopular_cities .cities{
        background: #FFFFFF;
        border: 1px solid #E9E9E9;
        box-sizing: border-box;
        border-radius: 10px;
        width: 160px;
        height: 200px;
        margin-right: 25px;

        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        cursor: pointer;
        transition: transform 1s ease 0s, opacity 1s ease 1s;
    }
    .mostPopular_cities .cities.active_popular_city{
        background: linear-gradient(141.34deg, #0090FA 0%, rgba(0, 144, 250, 0.65) 100%);
        border-radius: 10px;
        transform: scale(1.14);
        margin-right: 36px;
        margin-left: 11px;
    }
    .mostPopular_cities .cities:hover{
        transform: scale(1.1);
    }
    .mostPopular_cities .cities.active_popular_city h4{
        color: #fff;
    }
    .favourite_cities{
        padding: 10px 25px 65px;
    }
    .favourite_cities h5{
        font-size: 38px;
        font-weight: 600;
        margin: 30px 0;
    }
    .favourite_cities table{
        border-radius: 10px;
        border-collapse: initial;
        border-spacing: 0;
        margin: 0;
    }
    .favourite_cities th, .favourite_cities td{
        border: none;
    }
    .favourite_cities th:first-child{
        border-radius: 10px 0 0 0;
    }
    .favourite_cities th:last-child{
        border-radius: 0 10px 0 0;
    }
    .favourite_cities th{
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        font-size: 15px;
        border-bottom: none;
        background: #E8F2FE;

        color: #737373;
    }
    .favourite_cities td{
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        font-size: 19px;
        border-bottom: 1px solid #E9E9E9;
        background: #fff;

        color: #000000;
    }
    .favourite_cities tr:first-child th{
        border-bottom: none;
    }
    .favourite_cities tr:first-child td{
        border-top: 1px solid #E9E9E9;
    }
    .favourite_cities tr:last-child td{
        border-bottom: none;
    }
    .favourite_cities tr:last-child td:first-child{
        border-radius: 0 0 0 10px;
    }
    .favourite_cities tr:last-child td:last-child{
        border-radius: 0 0 10px 0;
    }
    .favourite_cities tr td:last-child{
        padding-right: 15px;
    }
    .favourite_cities td button{
        padding: 2px 15px;
        color: #308CF9;
        background: #fff;
        border-color: #308CF9;
    }
    .favourite_cities td button:hover{
        padding: 2px 15px;
        background: #308CF9;
        border-color: transparent;
    }
    .favourite_cities td button:active{
        background-color: #308CF9!important;
        border-color: transparent!important;
    }
    .favourite_cities td button:active, .favourite_cities td button:focus{
        box-shadow: none!important;
    }
    /*modal*/
    #modalRemoveFavoriteCity .modal-dialog{
        max-width: 600px;
        width: 600px;
        height: 300px;
        background: #FFFFFF;
        border-radius: 10px;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
    }
    #modalRemoveFavoriteCity .modal-dialog .modal-content{
        height: 300px;
    }
    #modalRemoveFavoriteCity .modal-dialog .modal-header{
        justify-content: center;
        border-bottom: none;
    }
    #modalRemoveFavoriteCity .modal-dialog .modal-title h3{
        font-weight: 600;
        font-style: normal;
        line-height: normal;
        font-size: 30px;
        text-align: center;
        color: #000000;
    }
    #modalRemoveFavoriteCity .modal-dialog .modal-body{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    #modalRemoveFavoriteCity .modal-dialog .modal-body .d-block p{
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        font-size: 23px;
        text-align: center;
        color: #000000;
    }
    #modalRemoveFavoriteCity .modal-dialog  .modal-body .d-block-footer{
        justify-content: center;
        border-top: none;
    }
    #modalRemoveFavoriteCity .modal-dialog .modal-body .d-block-footer .btn{
        width: 123px;
        height: 40px;
        margin-top: 0!important;
        box-sizing: border-box;
        border-radius: 4px;
        font-style: normal;
        line-height: normal;
        font-size: 19px;
        text-align: center;
    }
    #modalRemoveFavoriteCity .modal-dialog .modal-body .d-block-footer .mt-2{
        background: #FFFFFF;
        border: 2px solid #0090FA;
        font-weight: 500;
        margin-right: 25px;
        color: #0090FA;
    }
    #modalRemoveFavoriteCity .modal-dialog .modal-body .d-block-footer .mt-3{
        background: #0090FA;
        border: 1px solid #0090FA;
        font-weight: normal;
        margin-left: 0;
        color: #FFFFFF;
    }
    /*modal end*/
    @media screen and (max-width: 1366px) {
        .infoCity .nav .search_city{
            width: 220px;
        }
        .mostPopular_cities .cities:nth-child(3){
            order: 3;
        }
        .mostPopular_cities .cities.active_popular_city{
            margin-right: 66px;
        }
        .mostPopular_cities{
            padding: 20px 25px;
        }
        .mostPopular_cities .cities{
            margin-right: 55px;
            margin-bottom: 25px;
        }
    }
    @media screen and (max-width: 1160px) {
        .mostPopular_cities .cities {
            margin-right: 25px;
        }
        .mostPopular_cities .cities.active_popular_city {
            margin-right: 36px;
        }
    }
    @media screen and (max-width: 991px) {
        .infoCity .nav{
            height: 135px;
        }
        .infoCity .nav .search_city {
            width: 100%;
        }
        .infoCity .nav .search_city svg{
            bottom: 15px;
        }
        .infoCity .nav .search_city label.top_text{
            margin: 0 0 -10px 4px;
            position: inherit;
        }
        .mostPopular_cities .cities.active_popular_city {
            order: 5;
        }
    }
    @media screen and (max-width: 768px) {
        .infoCity{
            width: 100%;
        }
        .mostPopular_cities .cities.active_popular_city {
            order: 0;
        }
        .mostPopular_cities .cities {
            margin-right: 20px;
        }
        .mostPopular_cities .cities.active_popular_city {
            margin-right: 30px;
        }
    }
    @media screen and (max-width: 600px) {
        #modalRemoveFavoriteCity .modal-dialog{
            max-width: 400px;
            width: 400px;
        }
    }
    @media screen and (max-width: 440px) {
        #modalRemoveFavoriteCity .modal-dialog{
            max-width: 305px;
            width: 305px;
        }
        #modalRemoveFavoriteCity .modal-dialog .modal-body .d-block-footer .mt-2{
            margin-right: 15px;
        }
        .mostPopular_cities .cities{
            width: 200px;
            height: 240px;
        }
        .mostPopular_cities .cities.active_popular_city {
            order: 4;
        }
        .mostPopular_cities .cities:nth-child(2) {
            order: 2;
        }
        .mostPopular_cities .cities:nth-child(3) {
            order: 3;
        }
        .mostPopular_cities .cities:nth-child(5) {
            order: 5;
        }
        .mostPopular_cities .cities:nth-child(6) {
            order: 6;
        }
        .infoCity .nav .search_city label.top_text{
            top: 70px;
        }
        .favourite_cities {
            padding: 10px 0 30px;
        }
        .mostPopular_cities h2{
            font-size: 27px;
        }
        .favourite_cities h2{
            margin-left: 20px;
            font-size: 27px;
        }
        .favourite_cities table,
        .favourite_cities th:first-child,
        .favourite_cities th:last-child,
        .favourite_cities tr:last-child td:first-child,
        .favourite_cities tr:last-child td:last-child{
            border-radius: 0;
        }
        /*table*/
        .favourite_cities table, thead, tbody, th, td, tr {
            display: block;
        }
        .favourite_cities thead tr {
            position: absolute;
            top: -9999px;
            left: -9999px;
        }
        .favourite_cities tr:first-child td{
            border-top: none;
        }
        .favourite_cities tr {
            border: 1px solid #ccc;
        }
        .favourite_cities tr td,
        .favourite_cities tr:last-child td {
            border-bottom: 1px solid #eee;
            position: relative;
            padding-left: 50%;
        }
        .favourite_cities tr td:before {
            position: absolute;
            left: 6px;
            width: 45%;
            padding-right: 10px;
            white-space: nowrap;
        }
        .favourite_cities tr td:nth-of-type(1):before {
            content: "City";
        }
        .favourite_cities tr td:nth-of-type(2):before {
            content: "Last seen";
        }
        .favourite_cities tr td:nth-of-type(3):before {
            content: "";
        }
        .favourite_cities .table-bordered{
            border: none;
        }
        /*table*/
    }
</style>