import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import bloggersAssociationLogo from "../../../assets/partners/bloggers-association-of-kenya-logo.png";
import empirisLogo from "../../../assets/partners/Empiris_Creative-Communication-Ltd.png";
import KICTANETLogo from "../../../assets/partners/KICTANET-logo.png";

// Import Swiper styles
import Image from "next/image";
import { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css";
import "swiper/css/pagination";

// import required modules

function Testmonials() {
  const data = useMemo(() => {
    return [
      {
        logo: bloggersAssociationLogo,
        name: "Bloggers Association of Kenya",
      },
      {
        logo: empirisLogo,
        name: "KICTANET",
      },
      {
        logo: KICTANETLogo,
        name: "KICTANET",
      },
    ];
  }, []);

  SwiperCore.use([Autoplay, Navigation, Pagination]);
  return (
    <Stack
      id="testmonials"
      justifyContent={"center"}
      alignItems="center"
      sx={{ paddingTop: "2em", paddingBottom: "2em" }}
    >
      <Typography variant="h2" color="primary" mb={3}>
        Our Clients & Partners
      </Typography>
      <Swiper
        style={{
          width: "40%",
        }}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        modules={[Pagination, EffectFade]}
      >
        {data.map(({ name, logo }, index) => (
          <SwiperSlide
            className="testmonial"
            key={index}
            style={{ display: "grid", placeItems: "center" }}
          >
            <Box sx={{ marginBottom: "2em" }}>
              <Image src={logo} alt={name} height={100} />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Stack>
  );
}

export default Testmonials;
