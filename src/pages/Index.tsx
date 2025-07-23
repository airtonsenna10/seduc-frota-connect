import { LoginForm } from "@/components/ui/login-form"

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div 
          className="rounded-2xl p-8 shadow-2xl"
          style={{ 
            backgroundColor: "var(--login-card)",
            boxShadow: "var(--login-card-shadow)"
          }}
        >
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Index;