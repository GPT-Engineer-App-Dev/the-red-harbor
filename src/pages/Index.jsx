import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Flag, Star, Users, Building2 } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const features = [
    { icon: <Flag className="h-6 w-6" />, title: "Single-Party System", description: "Communist Party of China (CPC) as the sole governing party" },
    { icon: <Star className="h-6 w-6" />, title: "Socialist Market Economy", description: "Blend of state-owned enterprises and private businesses" },
    { icon: <Users className="h-6 w-6" />, title: "Collective Leadership", description: "Decision-making through party committees and consensus" },
    { icon: <Building2 className="h-6 w-6" />, title: "State-Owned Enterprises", description: "Key industries controlled by the government" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Communist China</h1>
        <p className="text-xl text-gray-600">Exploring the People's Republic of China</p>
      </header>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="features">Key Features</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Overview of Communist China</CardTitle>
              <CardDescription>A brief introduction to the People's Republic of China</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Communist China, officially known as the People's Republic of China (PRC), is the world's most populous country and the largest communist state. Established in 1949 under the leadership of Mao Zedong, it has since undergone significant economic and social transformations while maintaining its socialist political system.
              </p>
              <p>
                Today, China is a major global power, with the world's second-largest economy and a growing influence on international affairs. The country continues to be governed by the Communist Party of China, which oversees a unique blend of communist ideology and market-oriented economic policies.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="history" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>History of Communist China</CardTitle>
              <CardDescription>Key events in the development of modern China</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>1921: Formation of the Communist Party of China</li>
                <li>1949: Establishment of the People's Republic of China</li>
                <li>1958-1962: The Great Leap Forward</li>
                <li>1966-1976: The Cultural Revolution</li>
                <li>1978: Economic reforms and opening-up policy under Deng Xiaoping</li>
                <li>2001: China joins the World Trade Organization</li>
                <li>2013: Xi Jinping becomes President, launching anti-corruption campaigns</li>
                <li>2020: China declares victory in extreme poverty eradication</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="features" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {feature.icon}
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="text-center">
        <Button size="lg" className="mt-8 bg-red-600 hover:bg-red-700 text-white">
          Learn More About Communist China
        </Button>
      </div>
    </div>
  );
};

export default Index;
