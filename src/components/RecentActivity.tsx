import { BookOpen, Award, MessageCircle } from "lucide-react";

const activities = [
  {
    icon: BookOpen,
    title: "Completed lesson: Introduction to React",
    time: "2 hours ago",
    color: "text-blue-600 bg-blue-100"
  },
  {
    icon: Award,
    title: "Earned certificate: JavaScript Fundamentals",
    time: "1 day ago",
    color: "text-green-600 bg-green-100"
  },
  {
    icon: MessageCircle,
    title: "New message from instructor",
    time: "2 days ago",
    color: "text-purple-600 bg-purple-100"
  },
  {
    icon: BookOpen,
    title: "Started new course: Advanced CSS",
    time: "3 days ago",
    color: "text-orange-600 bg-orange-100"
  }
];

const RecentActivity = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className={`p-2 rounded-lg ${activity.color}`}>
              <activity.icon size={16} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-800">{activity.title}</p>
              <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity; 