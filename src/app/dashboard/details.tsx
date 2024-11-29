'use client';

import { useSession, useUser } from "@clerk/nextjs";

export function UserDetails() {
  const { isLoaded, user } = useUser();

  const handleUpdateProfile = () => {
    // Redirect the user to the profile update page or handle the update logic here
    window.location.href = '/update-profile'; // Example: Redirect to update profile page
  };

  return (
    <div className="bg-white overflow-hidden rounded-lg shadow-lg">
      <div className="flex justify-between items-center p-8">
        <h3 className="text-xl font-semibold text-gray-900">User Info</h3>
      </div>
      {isLoaded && user ? (
        <div className="pb-6 max-h-96">
          <dl className="px-8">
            <div className="py-2">
              <dt className="text-sm font-semibold text-gray-700">User ID</dt>
              <dd className="mt-1 text-sm text-gray-600">{user.id}</dd>
            </div>
            {user.firstName ? (
              <div className="py-2">
                <dt className="text-sm font-semibold text-gray-700">Name</dt>
                <dd className="mt-1 text-sm text-gray-600">
                  {user.firstName} {user.lastName}
                </dd>
              </div>
            ) : (
              <div className="py-2">
                <dt className="text-sm font-semibold text-gray-700">Name</dt>
                <dd className="mt-1 text-sm text-gray-600">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                    onClick={handleUpdateProfile}
                  >
                    Update Profile
                  </button>
                </dd>
              </div>
            )}
            <div className="py-2">
              <dt className="text-sm font-semibold text-gray-700">Email addresses</dt>
              <dd className="mt-1 text-sm text-gray-600">
                {user.emailAddresses.map((email) => (
                  <div key={email.id} className="flex gap-2 mb-1">
                    {email.emailAddress}
                    {user.primaryEmailAddressId === email.id && (
                      <span className="text-xs bg-blue-100 text-blue-700 rounded-full px-2 font-medium">
                        Primary
                      </span>
                    )}
                  </div>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      ) : (
        <div className="text-gray-700 px-4 py-5">Loading user data...</div>
      )}
    </div>
  );
}

export function SessionDetails() {
  const { isLoaded, session } = useSession();

  return (
    <div className="bg-white shadow-lg overflow-hidden rounded-lg">
      <div className="flex p-8">
        <h3 className="text-xl font-semibold text-gray-900 my-auto">Session Info</h3>
      </div>
      {isLoaded && session ? (
        <div className="pb-6 max-h-96">
          <dl>
            <div className="px-8 py-2">
              <dt className="text-sm font-semibold text-gray-700">Session ID</dt>
              <dd className="mt-1 text-sm text-gray-600">{session.id}</dd>
            </div>
            <div className="px-8 py-2">
              <dt className="text-sm font-semibold text-gray-700">Last Active</dt>
              <dd className="mt-1 text-sm text-gray-600">
                {new Date(session.lastActiveAt).toLocaleString()}
              </dd>
            </div>
            <div className="px-8 py-2">
              <dt className="text-sm font-semibold text-gray-700">Expiry</dt>
              <dd className="mt-1 text-sm text-gray-600">
                {new Date(session.expireAt).toLocaleString()}
              </dd>
            </div>
          </dl>
        </div>
      ) : (
        <div className="text-gray-700 px-4 py-5">Loading session data...</div>
      )}
    </div>
  );
}
