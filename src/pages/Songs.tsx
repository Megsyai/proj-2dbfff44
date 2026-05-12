
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Music, Search, Disc, User } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const SONGS_DATA = [
  { id: 1, name: "أنت عمري", composer: "محمد عبد الوهاب", lyricist: "أحمد شفيق كامل", year: 1964, duration: "128 min" },
  { id: 2, name: "الأطلال", composer: "رياض السنباطي", lyricist: "إبراهيم ناجي", year: 1966, duration: "60 min" },
  { id: 3, name: "ألف ليلة وليلة", composer: "بليغ حمدي", lyricist: "مرسي جميل عزيز", year: 1969, duration: "55 min" },
  { id: 4, name: "هذه ليلتي", composer: "محمد عبد الوهاب", lyricist: "جورج جرداق", year: 1968, duration: "45 min" },
  { id: 5, name: "فكروني", composer: "محمد عبد الوهاب", lyricist: "عبد الوهاب محمد", year: 1966, duration: "65 min" },
  { id: 6, name: "رق الحبيب", composer: "محمد القصبجي", lyricist: "أحمد رامي", year: 1944, duration: "35 min" },
  { id: 7, name: "لسه فاكر", composer: "رياض السنباطي", lyricist: "عبد الفتاح مصطفى", year: 1960, duration: "50 min" },
  { id: 8, name: "أمل حياتي", composer: "محمد عبد الوهاب", lyricist: "أحمد شفيق كامل", year: 1965, duration: "58 min" },
];

const SongsPage = () => {
  const [search, setSearch] = useState("");

  const filteredSongs = SONGS_DATA.filter(song => 
    song.name.includes(search) || song.composer.includes(search)
  );

  return (
    <div>
      <section className="bg-neutral-900 py-20 border-b border-yellow-900/20">
        <Container>
          <div className="max-w-2xl">
            <h1 className="text-5xl font-serif text-yellow-500 mb-6">أرشيف الأعمال الخالدة</h1>
            <p className="text-gray-400 text-lg">
              تصفح قاعدة بيانات الأغاني التي صاغها كبار الملحنين والشعراء لتشدو بها الست عبر العقود.
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="relative w-full md:w-96">
            <Search className="absolute right-3 top-3 text-gray-500 w-5 h-5" />
            <Input 
              placeholder="ابحث عن أغنية أو ملحن..." 
              className="bg-neutral-900 border-yellow-900/30 pr-10 text-white h-12"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Badge variant="outline" className="border-yellow-600 text-yellow-600 px-4 py-1">الكل</Badge>
            <Badge variant="ghost" className="text-gray-400 px-4 py-1">عبد الوهاب</Badge>
            <Badge variant="ghost" className="text-gray-400 px-4 py-1">السنباطي</Badge>
            <Badge variant="ghost" className="text-gray-400 px-4 py-1">بليغ حمدي</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSongs.map((song) => (
            <motion.div 
              layout
              key={song.id}
              className="bg-neutral-900/50 p-6 rounded-xl border border-yellow-900/10 hover:border-yellow-500/40 transition-all group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-yellow-600/10 rounded-lg text-yellow-600 group-hover:bg-yellow-600 group-hover:text-black transition-colors">
                  <Music className="w-6 h-6" />
                </div>
                <span className="text-gray-500 font-mono">{song.year}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">{song.name}</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Disc className="w-4 h-4 text-yellow-700" />
                  <span>ألحان: {song.composer}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-yellow-700" />
                  <span>كلمات: {song.lyricist}</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center">
                <span className="text-xs text-gray-500">{song.duration}</span>
                <button className="text-sm text-yellow-500 hover:underline">استماع للحفلة</button>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default SongsPage;
