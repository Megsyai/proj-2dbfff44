
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SafeImage } from "@/components/SafeImage";
import { img } from "@/lib/img";
import { aiImage } from "@/lib/deapi";
import { Button } from "@/components/ui/button";
import { Play, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [heroImg, setHeroImg] = useState(img("vintage-microphone-stage", 1600, 900));

  useEffect(() => {
    aiImage("um kalthoum egyptian legendary singer artistic portrait, classic black and white, royal style, golden accents", {w:1600, h:900})
      .then(url => setHeroImg(url));
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <SafeImage src={heroImg} className="w-full h-full object-cover opacity-40 scale-105" fallbackSeed="kalthoum-hero" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>
        
        <Container className="relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-serif font-bold mb-6 text-yellow-500 drop-shadow-2xl"
          >
            الست
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-3xl font-light mb-10 text-gray-200 tracking-widest"
          >
            صوت مصر.. وسيدة الغناء العربي
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white border-none px-8 py-6 text-lg">
              <Play className="ml-2 w-5 h-5 fill-current" /> استمع الآن
            </Button>
            <Button size="lg" variant="outline" className="border-yellow-600 text-yellow-500 hover:bg-yellow-600/10 px-8 py-6 text-lg">
              اكتشف رحلتها
            </Button>
          </motion.div>
        </Container>
      </section>

      {/* Biography Section */}
      <Section className="bg-neutral-950">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-yellow-600 mb-8 border-r-4 border-yellow-600 pr-6">بدايات من رحم الريف</h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                ولدت فاطمة إبراهيم البلتاجي في قرية "طماي الزهايرة" بمحافظة الدقهلية، حيث بدأت رحلتها بغناء التواشيح والموشحات في فرقة والدها الدينية وهي طفلة صغيرة متنكرة في زي صبي.
              </p>
              <p>
                لم يكن صوتها مجرد موهبة عابرة، بل كان ظاهرة طغت على عصرها، فجمعت بين قوة الأداء وعمق الإحساس، لتصبح لاحقاً الركن الأساسي في الثقافة الموسيقية العربية.
              </p>
            </div>
          </motion.div>
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative"
          >
            <div className="absolute -inset-4 border border-yellow-600/30 rounded-lg -z-10 translate-x-4 translate-y-4" />
            <SafeImage src={img("vintage-egypt", 800, 600)} className="rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" fallbackSeed="egypt-village" />
          </motion.div>
        </div>
      </Section>

      {/* Featured Songs Preview */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-white mb-4">روائع كوكب الشرق</h2>
          <p className="text-gray-400">ألحان خلدت في ذاكرة الزمان</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "أنت عمري", year: "1964", desc: "لقاء السحاب مع محمد عبد الوهاب" },
            { title: "الأطلال", year: "1966", desc: "درة الأغنية العربية لشاعر إبراهيم ناجي" },
            { title: "ألف ليلة وليلة", year: "1969", desc: "تحفة بليغ حمدي الخالدة" }
          ].map((song, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-neutral-900 p-8 rounded-xl border border-yellow-900/20 hover:border-yellow-500/50 transition-all group"
            >
              <div className="text-yellow-600 text-sm font-mono mb-2">{song.year}</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-500 transition-colors">{song.title}</h3>
              <p className="text-gray-400 mb-6">{song.desc}</p>
              <Link to="/songs" className="flex items-center text-yellow-600 hover:text-yellow-400">
                المزيد من التفاصيل <ArrowLeft className="mr-2 w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Cultural Impact */}
      <Section className="bg-yellow-600 text-black">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-8 italic">"أم كلثوم ليست مجرد مطربة، إنها دولة."</h2>
          <p className="text-xl leading-relaxed mb-10 opacity-90">
            تأثيرها لم يقتصر على الموسيقى، بل كانت رمزاً للوحدة الوطنية والعربية، حيث جمعت الملايين حول الراديو في "الخميس الأول" من كل شهر، ليتوقف صخب العالم من أجل صوتها.
          </p>
          <div className="flex justify-center gap-12">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">300+</div>
              <div className="text-sm font-medium">عمل فني</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-sm font-medium">سنة من العطاء</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">280</div>
              <div className="text-sm font-medium">مليون ألبوم بيع</div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default HomePage;
