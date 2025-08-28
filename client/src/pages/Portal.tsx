import { useState } from "react";
import { BarChart3, FileText, Download, MessageSquare, Settings, Bell, Calendar, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function Portal() {
  const [currentUser] = useState({
    name: "Max Mustermann",
    company: "Musterfirma GmbH",
    email: "max@musterfirma.de",
    plan: "Professional"
  });

  const dashboardStats = [
    { title: "Website Besucher", value: "2,847", change: "+12%", trend: "up" },
    { title: "Konversionen", value: "47", change: "+8%", trend: "up" },
    { title: "SEO Score", value: "78/100", change: "+5", trend: "up" },
    { title: "Offene Aufgaben", value: "3", change: "-2", trend: "down" }
  ];

  const recentReports = [
    {
      title: "Monatlicher SEO-Report März 2024",
      date: "15.03.2024",
      type: "SEO",
      status: "Neu",
      fileSize: "2.4 MB"
    },
    {
      title: "Website Performance Analyse",
      date: "10.03.2024", 
      type: "Performance",
      status: "Gelesen",
      fileSize: "1.8 MB"
    },
    {
      title: "Social Media Report Februar",
      date: "28.02.2024",
      type: "Social Media",
      status: "Gelesen", 
      fileSize: "3.1 MB"
    }
  ];

  const projectFiles = [
    {
      name: "Logo-Dateien (Alle Formate)",
      type: "Design Assets",
      date: "12.03.2024",
      size: "15.2 MB",
      category: "Branding"
    },
    {
      name: "Website Screenshots",
      type: "Dokumentation", 
      date: "08.03.2024",
      size: "8.7 MB",
      category: "Website"
    },
    {
      name: "Social Media Templates",
      type: "Templates",
      date: "05.03.2024", 
      size: "12.4 MB",
      category: "Social Media"
    }
  ];

  const projectMilestones = [
    {
      title: "Website Launch",
      status: "Abgeschlossen",
      date: "15.02.2024",
      description: "Neue Website erfolgreich live geschaltet"
    },
    {
      title: "SEO-Optimierung Phase 1", 
      status: "In Bearbeitung",
      date: "Bis 30.03.2024",
      description: "On-Page Optimierung und Content-Updates"
    },
    {
      title: "Social Media Setup",
      status: "Geplant",
      date: "Ab 01.04.2024", 
      description: "Einrichtung und erste Kampagnen"
    }
  ];

  const supportTickets = [
    {
      id: "#2024-0156",
      subject: "Google Analytics Setup",
      status: "Offen",
      priority: "Hoch",
      created: "16.03.2024",
      lastUpdate: "Heute, 14:30"
    },
    {
      id: "#2024-0142", 
      subject: "E-Mail Newsletter Template",
      status: "In Bearbeitung",
      priority: "Normal",
      created: "12.03.2024",
      lastUpdate: "Gestern, 16:45"
    }
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-navy via-primary-blue to-light-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Willkommen zurück, <span className="text-sand">{currentUser.name}</span>
              </h1>
              <p className="text-slate-200">
                {currentUser.company} • {currentUser.plan} Plan
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-navy" data-testid="portal-notifications">
                <Bell className="h-4 w-4 mr-2" />
                Benachrichtigungen
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-navy" data-testid="portal-settings">
                <Settings className="h-4 w-4 mr-2" />
                Einstellungen
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-8 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="dashboard" className="space-y-8">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="dashboard" data-testid="tab-dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="reports" data-testid="tab-reports">Berichte</TabsTrigger>
              <TabsTrigger value="files" data-testid="tab-files">Dateien</TabsTrigger>
              <TabsTrigger value="projects" data-testid="tab-projects">Projekte</TabsTrigger>
              <TabsTrigger value="support" data-testid="tab-support">Support</TabsTrigger>
            </TabsList>

            {/* Dashboard Tab */}
            <TabsContent value="dashboard" className="space-y-8">
              {/* Stats Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {dashboardStats.map((stat, index) => (
                  <Card key={index} data-testid={`dashboard-stat-${index}`}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                      <TrendingUp className={`h-4 w-4 ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`} />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <p className={`text-xs ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                        {stat.change} gegenüber letztem Monat
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Aktuelle Berichte</CardTitle>
                    <CardDescription>Ihre neuesten Analyse-Reports</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentReports.slice(0, 3).map((report, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                        <div>
                          <div className="font-medium text-sm">{report.title}</div>
                          <div className="text-xs text-slate-600">{report.date} • {report.fileSize}</div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant={report.status === 'Neu' ? 'default' : 'secondary'}>
                            {report.status}
                          </Badge>
                          <Button size="sm" variant="outline" data-testid={`download-report-${index}`}>
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Projekt-Status</CardTitle>
                    <CardDescription>Aktuelle Meilensteine und Fortschritt</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {projectMilestones.map((milestone, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className={`w-3 h-3 rounded-full mt-1 ${
                          milestone.status === 'Abgeschlossen' ? 'bg-green-500' :
                          milestone.status === 'In Bearbeitung' ? 'bg-blue-500' : 'bg-slate-300'
                        }`}></div>
                        <div className="flex-1">
                          <div className="font-medium text-sm">{milestone.title}</div>
                          <div className="text-xs text-slate-600">{milestone.date}</div>
                          <Badge variant="outline" className="mt-1 text-xs">
                            {milestone.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Reports Tab */}
            <TabsContent value="reports" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Alle Berichte</CardTitle>
                  <CardDescription>Laden Sie alle verfügbaren Analyse-Reports herunter</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentReports.map((report, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="bg-primary-blue/10 p-3 rounded-lg">
                            <BarChart3 className="h-6 w-6 text-primary-blue" />
                          </div>
                          <div>
                            <div className="font-medium">{report.title}</div>
                            <div className="text-sm text-slate-600">{report.type} • {report.date} • {report.fileSize}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Badge variant={report.status === 'Neu' ? 'default' : 'secondary'}>
                            {report.status}
                          </Badge>
                          <Button data-testid={`view-report-${index}`}>
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Files Tab */}
            <TabsContent value="files" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Projekt-Dateien</CardTitle>
                  <CardDescription>Alle Ihre Projekt-Assets und Dokumentationen</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {projectFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="bg-slate-100 p-3 rounded-lg">
                            <FileText className="h-6 w-6 text-slate-600" />
                          </div>
                          <div>
                            <div className="font-medium">{file.name}</div>
                            <div className="text-sm text-slate-600">{file.type} • {file.date} • {file.size}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Badge variant="outline">{file.category}</Badge>
                          <Button variant="outline" data-testid={`download-file-${index}`}>
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Projects Tab */}
            <TabsContent value="projects" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Projekt-Meilensteine</CardTitle>
                  <CardDescription>Übersicht über alle Projekt-Phasen und Abnahmen</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {projectMilestones.map((milestone, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 border border-slate-200 rounded-lg">
                        <div className={`w-4 h-4 rounded-full mt-1 ${
                          milestone.status === 'Abgeschlossen' ? 'bg-green-500' :
                          milestone.status === 'In Bearbeitung' ? 'bg-blue-500' : 'bg-slate-300'
                        }`}></div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold">{milestone.title}</h3>
                            <Badge variant={
                              milestone.status === 'Abgeschlossen' ? 'default' :
                              milestone.status === 'In Bearbeitung' ? 'secondary' : 'outline'
                            }>
                              {milestone.status}
                            </Badge>
                          </div>
                          <p className="text-slate-600 text-sm mb-2">{milestone.description}</p>
                          <div className="flex items-center space-x-4">
                            <div className="text-xs text-slate-500 flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              {milestone.date}
                            </div>
                            {milestone.status === 'Abgeschlossen' && (
                              <Button size="sm" variant="outline" data-testid={`approve-milestone-${index}`}>
                                Freigeben
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Support Tab */}
            <TabsContent value="support" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Support-Tickets</CardTitle>
                    <CardDescription>Ihre Anfragen und deren Status</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {supportTickets.map((ticket, index) => (
                      <div key={index} className="p-4 border border-slate-200 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-medium">{ticket.subject}</div>
                          <Badge variant={
                            ticket.status === 'Offen' ? 'destructive' :
                            ticket.status === 'In Bearbeitung' ? 'default' : 'secondary'
                          }>
                            {ticket.status}
                          </Badge>
                        </div>
                        <div className="text-sm text-slate-600 space-y-1">
                          <div>Ticket: {ticket.id}</div>
                          <div>Erstellt: {ticket.created}</div>
                          <div>Letzte Antwort: {ticket.lastUpdate}</div>
                        </div>
                        <div className="mt-3">
                          <Badge variant="outline" className={
                            ticket.priority === 'Hoch' ? 'border-red-300 text-red-700' : 'border-slate-300'
                          }>
                            {ticket.priority} Priorität
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Neues Support-Ticket</CardTitle>
                    <CardDescription>Haben Sie eine Frage oder ein Problem?</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" data-testid="create-support-ticket">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Support-Anfrage erstellen
                    </Button>
                    
                    <div className="mt-6 space-y-4">
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Direkte Kontakte</h4>
                        <div className="space-y-2 text-sm">
                          <div>📧 support@castellconnect.de</div>
                          <div>📞 09325 391996</div>
                          <div>💬 WhatsApp: +49 159 123 456 78</div>
                        </div>
                      </div>
                      
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Support-Zeiten</h4>
                        <div className="text-sm space-y-1">
                          <div>Mo-Fr: 9:00 - 18:00 Uhr</div>
                          <div>Sa: 10:00 - 14:00 Uhr</div>
                          <div>Notfall-Hotline: 24/7</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
