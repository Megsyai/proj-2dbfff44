
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/lib/toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("شكراً لتواصلك معنا، سنرد عليك في أقرب وقت.");
  };

  return (
    <div className="min-h-screen">
      <section className="bg-yellow-600 py-16 text-black">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-black mb-4 font-serif">تواصل مع أرشيف الست</h1>
            <p className="text-lg opacity-90">
              لديك استفسار حول حجز في المتحف؟ أو ترغب في المساهمة في الأرشيف بقطع وصور نادرة؟ نحن في انتظارك.
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold mb-8 text-yellow-500">معلومات الاتصال</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-neutral-900 rounded-lg text-yellow-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">العنوان</h4>
                  <p className="text-gray-400 leading-relaxed">قصر المانسترلي، شارع المقياس، المنيل، القاهرة، جمهورية مصر العربية</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-neutral-900 rounded-lg text-yellow-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">البريد الإلكتروني</h4>
                  <p className="text-gray-400">info@um-kalthoum-archive.org</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-neutral-900 rounded-lg text-yellow-600">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">الهاتف</h4>
                  <p className="text-gray-400 mb-1">+20 (02) 23631537</p>
                  <p className="text-gray-400">+20 (02) 23632314</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-neutral-900/40 rounded-2xl border border-yellow-900/20">
               <h4 className="text-lg font-bold mb-4 text-yellow-500">ساعات العمل</h4>
               <div className="flex justify-between text-gray-400 mb-2">
                 <span>الأحد - الخميس</span>
                 <span>09:00 - 17:00</span>
               </div>
               <div className="flex justify-between text-gray-400">
                 <span>الجمعة - السبت</span>
                 <span>10:00 - 20:00</span>
               </div>
            </div>
          </div>

          <div className="bg-neutral-900 p-8 rounded-2xl border border-yellow-900/20">
            <h2 className="text-2xl font-bold mb-8">أرسل رسالة</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="first-name">الاسم الأول</Label>
                  <Input id="first-name" placeholder="أحمد" className="bg-black border-yellow-900/30" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">اسم العائلة</Label>
                  <Input id="last-name" placeholder="محمد" className="bg-black border-yellow-900/30" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">البريد الإلكتروني</Label>
                <Input id="email" type="email" placeholder="example@mail.com" className="bg-black border-yellow-900/30" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">الموضوع</Label>
                <Input id="subject" placeholder="مثلاً: حجز جولة مدرسية" className="bg-black border-yellow-900/30" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">الرسالة</Label>
                <Textarea id="message" placeholder="اكتب رسالتك هنا..." className="bg-black border-yellow-900/30 min-h-[150px]" required />
              </div>

              <Button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-700 text-black font-bold h-12">
                إرسال <Send className="mr-2 w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ContactPage;
