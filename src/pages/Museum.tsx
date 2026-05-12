
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SafeImage } from "@/components/SafeImage";
import { img } from "@/lib/img";
import { motion } from "framer-motion";
import { Camera, MapPin, Clock, Ticket } from "lucide-react";

const MuseumPage = () => {
  const exhibits = [
    { title: "نظارتها السوداء", img: img("black-sunglasses-vintage", 400, 400), desc: "النظارة الشمسية الأيقونية التي كانت ترتديها في سنواتها الأخيرة لحماية عينيها من الضوء الشديد." },
    { title: "المنديل الحريري", img: img("silk-handkerchief", 400, 400), desc: "المنديل الذي لم يكن يفارق يدها في كل وقفة مسرحية، قطعة من هيبتها الفنية." },
    { title: "فساتين المسرح", img: img("vintage-dress", 400, 400), desc: "مجموعة من الفساتين المصممة خصيصاً لها، والتي تعكس أناقة العصر الذهبي." },
    { title: "الأوسمة والجوائز", img: img("gold-medals", 400, 400), desc: "أوسمة الاستحقاق من مختلف الدول العربية والعالمية تقديراً لفنها." },
  ];

  return (
    <div>
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <SafeImage src={img("museum-interior", 1600, 900)} className="w-full h-full object-cover grayscale opacity-50" fallbackSeed="museum-hero" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <Container className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-serif text-yellow-500 mb-6">متحف أم كلثوم</h1>
          <p className="text-xl text-gray-300 max-w-xl">رحلة بصرية ومسموعة في قصر "المانسترلي" المطل على نيل القاهرة الخالد.</p>
        </Container>
      </section>

      <Section>
        <div className="grid md:grid-cols-3 gap-12 mb-20 text-center">
          <div className="space-y-4">
            <div className="mx-auto w-16 h-16 bg-yellow-600/10 rounded-full flex items-center justify-center text-yellow-600">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold">الموقع</h3>
            <p className="text-gray-400">المنيل، القاهرة - قصر المانسترلي</p>
          </div>
          <div className="space-y-4">
            <div className="mx-auto w-16 h-16 bg-yellow-600/10 rounded-full flex items-center justify-center text-yellow-600">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold">المواعيد</h3>
            <p className="text-gray-400">يومياً من 9 صباحاً حتى 4 مساءً</p>
          </div>
          <div className="space-y-4">
            <div className="mx-auto w-16 h-16 bg-yellow-600/10 rounded-full flex items-center justify-center text-yellow-600">
              <Ticket className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold">التذاكر</h3>
            <p className="text-gray-400">متاحة عند المدخل وللحجز المسبق</p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-serif text-white mb-12 text-center underline underline-offset-8 decoration-yellow-600 block">أبرز المقتنيات</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {exhibits.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="overflow-hidden rounded-lg mb-4 aspect-square">
                  <SafeImage src={item.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" fallbackSeed={`exhibit-${i}`} />
                </div>
                <h4 className="text-xl font-bold mb-2 text-yellow-500">{item.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-neutral-900">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
             <SafeImage src={img("vintage-radio", 800, 600)} className="rounded-2xl shadow-2xl" fallbackSeed="radio" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-serif text-yellow-600 mb-6">القاعة السمعية البصرية</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              يضم المتحف قاعة مجهزة بأحدث الوسائل التكنولوجية، حيث يمكن للزوار الاستماع إلى حفلات نادرة ومشاهدة لقطات سينمائية ومقابلات لم تذع من قبل، بتقنية صوتية محيطة تجعلك في وسط مسرح الأزبكية.
            </p>
            <ul className="space-y-4 text-gray-400 font-light">
              <li className="flex items-center gap-3"><Camera className="w-5 h-5 text-yellow-600" /> عرض أفلام وثائقية مدتها 15 دقيقة</li>
              <li className="flex items-center gap-3"><Camera className="w-5 h-5 text-yellow-600" /> مكتبة رقمية تضم كافة أغانيها</li>
              <li className="flex items-center gap-3"><Camera className="w-5 h-5 text-yellow-600" /> ركن الصور العائلية النادرة</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default MuseumPage;
