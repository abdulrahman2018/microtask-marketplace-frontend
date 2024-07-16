import React, { useState } from 'react';
import { Search, Briefcase, DollarSign, Star } from 'lucide-react';
import Card from '../components/Card';
import CardHeader from '../components/CardHeader';
import CardContent from '../components/CardContent';
import CardTitle from '../components/CardTitle';
import Tabs from '../components/Tabs';
import TabsList from '../components/TabsList';
import TabsTrigger from '../components/TabsTrigger';
import TabsContent from '../components/TabsContent';
import Button from '../components/Button';
import Input from '../components/Input';

const MicrotaskMarketplace = () => {
  const [activeTab, setActiveTab] = useState('businesses');

  return (
    <div className="container mt-4">
      <h1 className="h2 mb-4">Microtask Marketplace</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="businesses" active={activeTab === 'businesses'} onClick={setActiveTab}>
            For Businesses
          </TabsTrigger>
          <TabsTrigger value="freelancers" active={activeTab === 'freelancers'} onClick={setActiveTab}>
            For Freelancers
          </TabsTrigger>
        </TabsList>
        <TabsContent value="businesses" activeValue={activeTab}>
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>Post a Task</CardTitle>
            </CardHeader>
            <CardContent>
              <Input className="mb-2" placeholder="Task Title" />
              <Input className="mb-2" placeholder="Task Description" />
              <Input className="mb-2" placeholder="Budget" />
              <Button className="w-100">Post Task</Button>
            </CardContent>
          </Card>
          <div className="row mt-4">
            <div className="col-md-6 mb-4">
              <Card>
                <CardHeader>
                  <CardTitle><Search className="me-2" />Browse Freelancers</CardTitle>
                </CardHeader>
                <CardContent>
                  Find skilled professionals for your tasks.
                </CardContent>
              </Card>
            </div>
            <div className="col-md-6 mb-4">
              <Card>
                <CardHeader>
                  <CardTitle><DollarSign className="me-2" />Secure Payments</CardTitle>
                </CardHeader>
                <CardContent>
                  Pay only when you're satisfied with the work.
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="freelancers" activeValue={activeTab}>
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>Find Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <Input className="mb-2" placeholder="Search for tasks..." />
              <Button className="w-100">Search</Button>
            </CardContent>
          </Card>
          <div className="row mt-4">
            <div className="col-md-6 mb-4">
              <Card>
                <CardHeader>
                  <CardTitle><Briefcase className="me-2" />Apply for Tasks</CardTitle>
                </CardHeader>
                <CardContent>
                  Submit proposals for tasks that match your skills.
                </CardContent>
              </Card>
            </div>
            <div className="col-md-6 mb-4">
              <Card>
                <CardHeader>
                  <CardTitle><Star className="me-2" />Build Your Reputation</CardTitle>
                </CardHeader>
                <CardContent>
                  Earn positive reviews to attract more opportunities.
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Platform Features</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Advanced search and filtering</li>
            <li className="list-group-item">Secure communication tools</li>
            <li className="list-group-item">Project management capabilities</li>
            <li className="list-group-item">Dispute resolution system</li>
            <li className="list-group-item">Reputation management with reviews and ratings</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default MicrotaskMarketplace;
