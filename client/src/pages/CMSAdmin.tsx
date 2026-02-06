import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { trpc } from "@/lib/trpc";
import { Plus, Edit, Trash2, Loader2, LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CMSAdmin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [activeTab, setActiveTab] = useState("team");

  // Login mutation
  const loginMutation = trpc.cms.adminLogin.useMutation({
    onSuccess: () => {
      setIsAuthenticated(true);
      toast.success("Login successful!");
    },
    onError: (error: any) => {
      toast.error(error.message || "Invalid credentials");
    },
    onSettled: () => {
      setIsLoggingIn(false);
    },
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    loginMutation.mutate({ username, password });
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername("");
    setPassword("");
    toast.success("Logged out successfully");
  };

  // Show login form if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center bg-gray-50 py-12 px-4">
          <Card className="w-full max-w-md">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">CMS Admin Login</CardTitle>
              <CardDescription className="text-center">
                Enter your credentials to access the content management system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    disabled={isLoggingIn}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={isLoggingIn}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoggingIn}>
                  {isLoggingIn ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Logging in...
                    </>
                  ) : (
                    "Login"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  // Show CMS interface if authenticated
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 bg-gray-50 py-12">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Content Management System</h1>
              <p className="text-gray-600 mt-2">Manage your website content</p>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="pages">Page Content</TabsTrigger>
              <TabsTrigger value="team">Team Members</TabsTrigger>
              <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
              <TabsTrigger value="cases">Case Studies</TabsTrigger>
              <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
              <TabsTrigger value="logos">Client Logos</TabsTrigger>
            </TabsList>

            <TabsContent value="pages">
              <PageContentEditor />
            </TabsContent>

            <TabsContent value="team">
              <TeamMembersManager />
            </TabsContent>

            <TabsContent value="testimonials">
              <TestimonialsManager />
            </TabsContent>

            <TabsContent value="cases">
              <Card>
                <CardHeader>
                  <CardTitle>Case Studies</CardTitle>
                  <CardDescription>Manage your case studies and success stories</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">Case studies manager coming soon...</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="portfolio">
              <Card>
                <CardHeader>
                  <CardTitle>Portfolio</CardTitle>
                  <CardDescription>Manage your portfolio items and projects</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">Portfolio manager coming soon...</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="logos">
              <Card>
                <CardHeader>
                  <CardTitle>Client Logos</CardTitle>
                  <CardDescription>Manage client and partner logos</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">Client logos manager coming soon...</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// Team Members Manager Component
function TeamMembersManager() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingMember, setEditingMember] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    bio: "",
    photoUrl: "",
    linkedinUrl: "",
    displayOrder: 0,
    isActive: true,
  });

  const utils = trpc.useUtils();
  const { data: members, isLoading } = trpc.cms.teamMembers.listAll.useQuery();

  const createMutation = trpc.cms.teamMembers.create.useMutation({
    onSuccess: () => {
      toast.success("Team member added successfully!");
      utils.cms.teamMembers.listAll.invalidate();
      resetForm();
      setIsDialogOpen(false);
    },
    onError: (error) => {
      toast.error(error.message || "Failed to add team member");
    },
  });

  const updateMutation = trpc.cms.teamMembers.update.useMutation({
    onSuccess: () => {
      toast.success("Team member updated successfully!");
      utils.cms.teamMembers.listAll.invalidate();
      resetForm();
      setIsDialogOpen(false);
    },
    onError: (error) => {
      toast.error(error.message || "Failed to update team member");
    },
  });

  const deleteMutation = trpc.cms.teamMembers.delete.useMutation({
    onSuccess: () => {
      toast.success("Team member deleted successfully!");
      utils.cms.teamMembers.listAll.invalidate();
    },
    onError: (error) => {
      toast.error(error.message || "Failed to delete team member");
    },
  });

  const resetForm = () => {
    setFormData({
      name: "",
      role: "",
      bio: "",
      photoUrl: "",
      linkedinUrl: "",
      displayOrder: 0,
      isActive: true,
    });
    setEditingMember(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingMember) {
      updateMutation.mutate({ id: editingMember.id, ...formData });
    } else {
      createMutation.mutate(formData);
    }
  };

  const handleEdit = (member: any) => {
    setEditingMember(member);
    setFormData({
      name: member.name,
      role: member.role,
      bio: member.bio || "",
      photoUrl: member.photoUrl || "",
      linkedinUrl: member.linkedinUrl || "",
      displayOrder: member.order || 0,
      isActive: member.isActive,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this team member?")) {
      deleteMutation.mutate(id);
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Team Members</CardTitle>
          <CardDescription>Manage your team members displayed on the About page</CardDescription>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) resetForm();
        }}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Member
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingMember ? "Edit Team Member" : "Add Team Member"}</DialogTitle>
              <DialogDescription>
                {editingMember ? "Update the team member information" : "Add a new team member to your website"}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Role *</Label>
                  <Input
                    id="role"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  rows={4}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="photoUrl">Photo URL</Label>
                <Input
                  id="photoUrl"
                  type="url"
                  value={formData.photoUrl}
                  onChange={(e) => setFormData({ ...formData, photoUrl: e.target.value })}
                  placeholder="https://example.com/photo.jpg"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="linkedinUrl">LinkedIn URL</Label>
                <Input
                  id="linkedinUrl"
                  type="url"
                  value={formData.linkedinUrl}
                  onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                  placeholder="https://linkedin.com/in/username"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="displayOrder">Display Order</Label>
                  <Input
                    id="displayOrder"
                    type="number"
                    value={formData.displayOrder}
                    onChange={(e) => setFormData({ ...formData, displayOrder: parseInt(e.target.value) || 0 })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="isActive">Active</Label>
                  <div className="flex items-center space-x-2 pt-2">
                    <Switch
                      id="isActive"
                      checked={formData.isActive}
                      onCheckedChange={(checked) => setFormData({ ...formData, isActive: checked })}
                    />
                    <Label htmlFor="isActive" className="cursor-pointer">
                      {formData.isActive ? "Active" : "Inactive"}
                    </Label>
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-4">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" disabled={createMutation.isPending || updateMutation.isPending}>
                  {(createMutation.isPending || updateMutation.isPending) ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    editingMember ? "Update" : "Create"
                  )}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
          </div>
        ) : !members || members.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No team members yet. Click "Add Member" to get started.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {members.map((member) => (
              <div key={member.id} className="flex items-start justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex gap-4">
                  {member.photoUrl && (
                    <img src={member.photoUrl} alt={member.name} className="w-16 h-16 rounded-full object-cover" />
                  )}
                  <div>
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                    {member.bio && <p className="text-sm text-gray-500 mt-1">{member.bio}</p>}
                    <div className="flex gap-2 mt-2">
                      {member.linkedinUrl && (
                        <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">
                          LinkedIn
                        </a>
                      )}
                      <span className={`text-xs px-2 py-1 rounded ${member.isActive ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}>
                        {member.isActive ? "Active" : "Inactive"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => handleEdit(member)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleDelete(member.id)} disabled={deleteMutation.isPending}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// Testimonials Manager Component
function TestimonialsManager() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<any>(null);
  const [formData, setFormData] = useState({
    clientName: "",
    clientTitle: "",
    clientCompany: "",
    testimonialText: "",
    rating: 5,
    photoUrl: "",
    displayOrder: 0,
    isActive: true,
  });

  const utils = trpc.useUtils();
  const { data: testimonials, isLoading } = trpc.cms.testimonials.listAll.useQuery();

  const createMutation = trpc.cms.testimonials.create.useMutation({
    onSuccess: () => {
      toast.success("Testimonial added successfully!");
      utils.cms.testimonials.listAll.invalidate();
      resetForm();
      setIsDialogOpen(false);
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to add testimonial");
    },
  });

  const updateMutation = trpc.cms.testimonials.update.useMutation({
    onSuccess: () => {
      toast.success("Testimonial updated successfully!");
      utils.cms.testimonials.listAll.invalidate();
      resetForm();
      setIsDialogOpen(false);
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to update testimonial");
    },
  });

  const deleteMutation = trpc.cms.testimonials.delete.useMutation({
    onSuccess: () => {
      toast.success("Testimonial deleted successfully!");
      utils.cms.testimonials.listAll.invalidate();
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to delete testimonial");
    },
  });

  const resetForm = () => {
    setFormData({
      clientName: "",
      clientTitle: "",
      clientCompany: "",
      testimonialText: "",
      rating: 5,
      photoUrl: "",
      displayOrder: 0,
      isActive: true,
    });
    setEditingTestimonial(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingTestimonial) {
      updateMutation.mutate({ id: editingTestimonial.id, ...formData });
    } else {
      createMutation.mutate(formData);
    }
  };

  const handleEdit = (testimonial: any) => {
    setEditingTestimonial(testimonial);
    setFormData({
      clientName: testimonial.clientName,
      clientTitle: testimonial.clientTitle || "",
      clientCompany: testimonial.clientCompany || "",
      testimonialText: testimonial.testimonialText,
      rating: testimonial.rating || 5,
      photoUrl: testimonial.photoUrl || "",
      displayOrder: testimonial.order || 0,
      isActive: testimonial.isActive,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this testimonial?")) {
      deleteMutation.mutate(id);
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Testimonials</CardTitle>
          <CardDescription>Manage client testimonials and reviews</CardDescription>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) resetForm();
        }}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Testimonial
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingTestimonial ? "Edit Testimonial" : "Add Testimonial"}</DialogTitle>
              <DialogDescription>
                {editingTestimonial ? "Update the testimonial information" : "Add a new client testimonial"}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="clientName">Client Name *</Label>
                  <Input
                    id="clientName"
                    value={formData.clientName}
                    onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="clientTitle">Client Title</Label>
                  <Input
                    id="clientTitle"
                    value={formData.clientTitle}
                    onChange={(e) => setFormData({ ...formData, clientTitle: e.target.value })}
                    placeholder="e.g., CEO, Marketing Director"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="clientCompany">Company</Label>
                <Input
                  id="clientCompany"
                  value={formData.clientCompany}
                  onChange={(e) => setFormData({ ...formData, clientCompany: e.target.value })}
                  placeholder="Company name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="testimonialText">Testimonial Content *</Label>
                <Textarea
                  id="testimonialText"
                  value={formData.testimonialText}
                  onChange={(e) => setFormData({ ...formData, testimonialText: e.target.value })}
                  rows={6}
                  required
                  placeholder="Enter the testimonial text..."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="photoUrl">Client Photo URL</Label>
                <Input
                  id="photoUrl"
                  type="url"
                  value={formData.photoUrl}
                  onChange={(e) => setFormData({ ...formData, photoUrl: e.target.value })}
                  placeholder="https://example.com/photo.jpg"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="rating">Rating (1-5)</Label>
                  <Input
                    id="rating"
                    type="number"
                    min="1"
                    max="5"
                    value={formData.rating}
                    onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) || 5 })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="displayOrder">Display Order</Label>
                  <Input
                    id="displayOrder"
                    type="number"
                    value={formData.displayOrder}
                    onChange={(e) => setFormData({ ...formData, displayOrder: parseInt(e.target.value) || 0 })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="isActive">Active</Label>
                  <div className="flex items-center space-x-2 pt-2">
                    <Switch
                      id="isActive"
                      checked={formData.isActive}
                      onCheckedChange={(checked) => setFormData({ ...formData, isActive: checked })}
                    />
                    <Label htmlFor="isActive" className="cursor-pointer">
                      {formData.isActive ? "Active" : "Inactive"}
                    </Label>
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-4">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" disabled={createMutation.isPending || updateMutation.isPending}>
                  {(createMutation.isPending || updateMutation.isPending) ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    editingTestimonial ? "Update" : "Create"
                  )}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
          </div>
        ) : !testimonials || testimonials.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No testimonials yet. Click "Add Testimonial" to get started.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex items-start justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex gap-4 flex-1">
                  {testimonial.photoUrl && (
                    <img src={testimonial.photoUrl} alt={testimonial.clientName} className="w-16 h-16 rounded-full object-cover flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-lg">{testimonial.clientName}</h3>
                      <div className="flex items-center">
                        {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                          <span key={i} className="text-yellow-400">★</span>
                        ))}
                      </div>
                    </div>
                    {(testimonial.clientTitle || testimonial.clientCompany) && (
                      <p className="text-gray-600 text-sm">
                        {testimonial.clientTitle}{testimonial.clientTitle && testimonial.clientCompany ? " at " : ""}{testimonial.clientCompany}
                      </p>
                    )}
                    <p className="text-gray-700 mt-2 line-clamp-3">{testimonial.testimonialText}</p>
                    <div className="flex gap-2 mt-2">
                      <span className={`text-xs px-2 py-1 rounded ${testimonial.isActive ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}>
                        {testimonial.isActive ? "Active" : "Inactive"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 flex-shrink-0 ml-4">
                  <Button variant="outline" size="sm" onClick={() => handleEdit(testimonial)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleDelete(testimonial.id)} disabled={deleteMutation.isPending}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// Page Content Editor Component
function PageContentEditor() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [editingContent, setEditingContent] = useState<Record<string, string>>({});
  const [isSaving, setIsSaving] = useState(false);

  const utils = trpc.useUtils();
  const { data: pageContent, isLoading } = trpc.cms.pageContent.getPage.useQuery({ pageId: selectedPage });

  const bulkUpsertMutation = trpc.cms.pageContent.bulkUpsert.useMutation({
    onSuccess: () => {
      toast.success("Page content saved successfully!");
      utils.cms.pageContent.getPage.invalidate();
      setIsSaving(false);
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to save page content");
      setIsSaving(false);
    },
  });

  // Initialize editing content when page data loads
  useEffect(() => {
    if (pageContent) {
      const contentMap: Record<string, string> = {};
      pageContent.forEach((item) => {
        const key = `${item.sectionId}.${item.contentKey}`;
        contentMap[key] = item.contentValue;
      });
      setEditingContent(contentMap);
    }
  }, [pageContent]);

  const handleContentChange = (sectionId: string, contentKey: string, value: string) => {
    const key = `${sectionId}.${contentKey}`;
    setEditingContent((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    setIsSaving(true);
    const updates = Object.entries(editingContent).map(([key, value]) => {
      const [sectionId, contentKey] = key.split(".");
      const existing = pageContent?.find(
        (item) => item.sectionId === sectionId && item.contentKey === contentKey
      );
      return {
        pageId: selectedPage,
        sectionId,
        contentKey,
        contentValue: value,
        contentType: existing?.contentType || "text",
        displayOrder: existing?.displayOrder || 0,
      };
    });
    bulkUpsertMutation.mutate(updates);
  };

  // Define page structure with sections and fields
  const pageStructure: Record<string, Array<{ section: string; label: string; fields: Array<{ key: string; label: string; type: "text" | "textarea" | "image" }> }>> = {
    home: [
      {
        section: "hero",
        label: "Hero Section",
        fields: [
          { key: "headline", label: "Main Headline", type: "text" },
          { key: "subheadline", label: "Subheadline", type: "textarea" },
          { key: "cta_primary", label: "Primary CTA Text", type: "text" },
          { key: "cta_secondary", label: "Secondary CTA Text", type: "text" },
          { key: "feature_card_title", label: "Feature Card Title", type: "text" },
          { key: "feature_card_desc", label: "Feature Card Description", type: "textarea" },
          { key: "card1_label", label: "Card 1 Label (Strategy)", type: "text" },
          { key: "card2_label", label: "Card 2 Label (Paid Ads)", type: "text" },
          { key: "card3_label", label: "Card 3 Label (AI Systems)", type: "text" },
          { key: "card4_label", label: "Card 4 Label (Analytics)", type: "text" },
        ],
      },
      {
        section: "partners",
        label: "Certified Partners Section",
        fields: [
          { key: "section_label", label: "Section Label", type: "text" },
          { key: "headline", label: "Headline", type: "text" },
          { key: "logo1_url", label: "Logo 1 URL (Google)", type: "image" },
          { key: "logo2_url", label: "Logo 2 URL (Meta)", type: "image" },
          { key: "logo3_url", label: "Logo 3 URL (Shopify)", type: "image" },
          { key: "logo4_url", label: "Logo 4 URL (Klaviyo)", type: "image" },
        ],
      },
      {
        section: "services",
        label: "Services Overview Section",
        fields: [
          { key: "section_label", label: "Section Label", type: "text" },
          { key: "headline", label: "Headline", type: "text" },
          { key: "description", label: "Description", type: "textarea" },
          { key: "service1_label", label: "Service 1 Label", type: "text" },
          { key: "service1_title", label: "Service 1 Title", type: "text" },
          { key: "service1_desc", label: "Service 1 Description", type: "textarea" },
          { key: "service2_label", label: "Service 2 Label", type: "text" },
          { key: "service2_title", label: "Service 2 Title", type: "text" },
          { key: "service2_desc", label: "Service 2 Description", type: "textarea" },
          { key: "service3_label", label: "Service 3 Label", type: "text" },
          { key: "service3_title", label: "Service 3 Title", type: "text" },
          { key: "service3_desc", label: "Service 3 Description", type: "textarea" },
        ],
      },
      {
        section: "results",
        label: "Results Section",
        fields: [
          { key: "section_label", label: "Section Label", type: "text" },
          { key: "headline", label: "Headline", type: "text" },
          { key: "description", label: "Description", type: "textarea" },
        ],
      },
      {
        section: "industries",
        label: "Industries Section",
        fields: [
          { key: "section_label", label: "Section Label", type: "text" },
          { key: "headline", label: "Headline", type: "text" },
          { key: "description", label: "Description", type: "textarea" },
          { key: "industry1_title", label: "Industry 1 Title (Home Services)", type: "text" },
          { key: "industry1_desc", label: "Industry 1 Description", type: "textarea" },
          { key: "industry2_title", label: "Industry 2 Title (E-commerce)", type: "text" },
          { key: "industry2_desc", label: "Industry 2 Description", type: "textarea" },
          { key: "industry3_title", label: "Industry 3 Title (Lease-Ups)", type: "text" },
          { key: "industry3_desc", label: "Industry 3 Description", type: "textarea" },
        ],
      },
      {
        section: "final_cta",
        label: "Final CTA Section",
        fields: [
          { key: "headline", label: "Headline", type: "text" },
          { key: "description", label: "Description", type: "textarea" },
          { key: "cta_text", label: "CTA Button Text", type: "text" },
          { key: "disclaimer", label: "Disclaimer Text", type: "textarea" },
        ],
      },
    ],
    about: [
      {
        section: "hero",
        label: "About Hero",
        fields: [
          { key: "headline", label: "Headline", type: "text" },
          { key: "description", label: "Description", type: "textarea" },
        ],
      },
      {
        section: "team",
        label: "Team Section",
        fields: [
          { key: "section_label", label: "Section Label", type: "text" },
          { key: "headline", label: "Headline", type: "text" },
          { key: "description", label: "Description", type: "textarea" },
        ],
      },
    ],
    services: [
      {
        section: "hero",
        label: "Services Hero",
        fields: [
          { key: "headline", label: "Headline", type: "text" },
          { key: "description", label: "Description", type: "textarea" },
        ],
      },
    ],
    results: [
      {
        section: "hero",
        label: "Results Hero",
        fields: [
          { key: "headline", label: "Headline", type: "text" },
          { key: "description", label: "Description", type: "textarea" },
        ],
      },
    ],
    contact: [
      {
        section: "hero",
        label: "Contact Hero",
        fields: [
          { key: "headline", label: "Headline", type: "text" },
          { key: "description", label: "Description", type: "textarea" },
        ],
      },
    ],
  };

  const currentStructure = pageStructure[selectedPage] || [];

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Page Content Editor</CardTitle>
            <CardDescription>Edit text, headlines, and images across your website</CardDescription>
          </div>
          <Button onClick={handleSave} disabled={isSaving || bulkUpsertMutation.isPending}>
            {isSaving || bulkUpsertMutation.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              "Save Changes"
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Page Selector */}
        <div className="space-y-2">
          <Label>Select Page</Label>
          <div className="flex gap-2">
            {["home", "about", "services", "results", "contact"].map((page) => (
              <Button
                key={page}
                variant={selectedPage === page ? "default" : "outline"}
                onClick={() => setSelectedPage(page)}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
          </div>
        ) : (
          <div className="space-y-8">
            {currentStructure.map((section) => (
              <Card key={section.section} className="border-2">
                <CardHeader className="bg-gray-50">
                  <CardTitle className="text-lg">{section.label}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  {section.fields.map((field) => {
                    const key = `${section.section}.${field.key}`;
                    const value = editingContent[key] || "";
                    
                    return (
                      <div key={field.key} className="space-y-2">
                        <Label htmlFor={key}>{field.label}</Label>
                        {field.type === "textarea" ? (
                          <Textarea
                            id={key}
                            value={value}
                            onChange={(e) => handleContentChange(section.section, field.key, e.target.value)}
                            rows={4}
                            placeholder={`Enter ${field.label.toLowerCase()}...`}
                          />
                        ) : field.type === "image" ? (
                          <Input
                            id={key}
                            type="url"
                            value={value}
                            onChange={(e) => handleContentChange(section.section, field.key, e.target.value)}
                            placeholder="https://example.com/image.jpg"
                          />
                        ) : (
                          <Input
                            id={key}
                            value={value}
                            onChange={(e) => handleContentChange(section.section, field.key, e.target.value)}
                            placeholder={`Enter ${field.label.toLowerCase()}...`}
                          />
                        )}
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            ))}
            
            {currentStructure.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No content sections defined for this page yet.</p>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
