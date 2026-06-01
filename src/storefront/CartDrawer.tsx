import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react';
import { useStore } from './store';
import { whatsappUrl } from './ui';

export const CartDrawer = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useStore();
  const message = [
    'Hello GhanaPack, I would like to place this packaging order:',
    ...cart.map((item) => `- ${item.title} | Size: ${item.size} | Color/Finish: ${item.color} | Qty: ${item.quantity}`),
    'Please confirm current pricing for these items.',
  ].join('\n');

  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`}>
      <button
        className={`absolute inset-0 bg-ink/40 transition ${open ? 'opacity-100' : 'opacity-0'}`}
        aria-label="Close cart"
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl transition duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between border-b border-slate-200 p-5">
          <div className="flex items-center gap-3">
            <ShoppingBag className="text-brand" />
            <h2 className="text-xl font-black text-ink">Cart</h2>
          </div>
          <button onClick={onClose} className="rounded-full p-2 hover:bg-slate-100" aria-label="Close cart">
            <X />
          </button>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto p-5">
          {cart.length === 0 ? (
            <div className="rounded-2xl bg-slate-50 p-8 text-center">
              <p className="font-bold text-ink">Your cart is empty.</p>
              <p className="mt-2 text-sm text-slate-600">Add a print product and send your order through WhatsApp.</p>
            </div>
          ) : (
            cart.map((item, index) => (
              <div key={`${item.productId}-${item.size}-${item.color}`} className="flex gap-4 rounded-2xl border border-slate-200 p-3">
                <img src={item.image} alt={item.title} className="h-20 w-20 rounded-xl object-cover" />
                <div className="min-w-0 flex-1">
                  <h3 className="font-black leading-tight text-ink">{item.title}</h3>
                  <p className="mt-1 text-xs text-slate-500">
                    {item.size} / {item.color}
                  </p>
                  <p className="mt-2 font-black text-brand">Pricing on request</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center rounded-full border border-slate-200">
                      <button
                        onClick={() => updateQuantity(index, item.quantity - 1)}
                        className="p-2"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center text-sm font-black">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(index, item.quantity + 1)}
                        className="p-2"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <button onClick={() => removeFromCart(index)} className="p-2 text-rose-500" aria-label="Remove item">
                      <Trash2 size={17} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="border-t border-slate-200 p-5">
          <div className="mb-4 flex items-center justify-between text-lg font-black text-ink">
            <span>Pricing</span>
            <span>Confirm on WhatsApp</span>
          </div>
          <a
            href={cart.length ? whatsappUrl(message) : undefined}
            target="_blank"
            rel="noreferrer"
            className={`block rounded-full px-5 py-4 text-center font-black ${cart.length ? 'bg-brand text-ink hover:bg-ink hover:text-white' : 'pointer-events-none bg-slate-300 text-white'}`}
          >
            Checkout on WhatsApp
          </a>
          {cart.length > 0 && (
            <button onClick={clearCart} className="mt-3 w-full rounded-full border border-slate-200 px-5 py-3 font-bold text-slate-700">
              Clear cart
            </button>
          )}
        </div>
      </aside>
    </div>
  );
};
